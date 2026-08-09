import React, { useState } from 'react';
import { LegalPageContent } from '../data/policyContent';
import { X, Send, CheckCircle2, ShieldAlert, Mail, User, MessageSquare } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: LegalPageContent;
  isContactPage?: boolean;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  content,
  isContactPage = false
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-md">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-100 shadow-2xl dark:border-slate-800">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Legal & Compliance</span>
            <h2 className="text-xl font-bold">{content.title}</h2>
            <p className="text-xs text-slate-400">{content.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content sections */}
        <div className="my-6 space-y-6">
          {content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-base font-bold text-indigo-300">{sec.heading}</h3>
              {sec.content.map((p, pIdx) => (
                <p key={pIdx} className="text-xs leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}
              {sec.listItems && (
                <ul className="ml-4 space-y-1 text-xs text-slate-400 list-disc">
                  {sec.listItems.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact form if contact page */}
          {isContactPage && (
            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="text-sm font-bold text-slate-100 mb-3 flex items-center space-x-2">
                <Mail className="h-4 w-4 text-indigo-400" />
                <span>운영자 1:1 문의 접수</span>
              </h3>

              {formSubmitted ? (
                <div className="rounded-lg bg-emerald-950/60 p-4 text-center text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                  <p className="font-bold text-sm">문의가 성공적으로 접수되었습니다!</p>
                  <p className="text-xs text-emerald-200/80 mt-1">확인 후 입력해주신 이메일로 빠르게 답변해 드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="mb-1 block text-xs text-slate-300">성함 또는 닉네임</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="홍길동"
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 pl-9 pr-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-slate-300">이메일 주소</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="user@example.com"
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 pl-9 pr-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-slate-300">문의 내용</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="VS Code x Claude Code 가이드 관련 문의사항을 남겨주세요."
                      className="w-full rounded-lg border border-slate-800 bg-slate-900 p-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-500"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>문의 보내기</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-[11px] text-slate-500">
          <span>최종 수정일: {content.lastUpdated}</span>
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-4 py-1.5 font-medium text-slate-300 hover:bg-slate-700"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
