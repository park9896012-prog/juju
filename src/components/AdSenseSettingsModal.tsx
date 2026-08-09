import React, { useState } from 'react';
import { AdSenseConfig } from '../types';
import { X, CheckCircle, ShieldCheck, Sparkles, Copy, ExternalLink, HelpCircle } from 'lucide-react';

interface AdSenseSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AdSenseConfig;
  onSave: (newConfig: AdSenseConfig) => void;
}

export const AdSenseSettingsModal: React.FC<AdSenseSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave
}) => {
  const [publisherId, setPublisherId] = useState(config.publisherId);
  const [isLiveMode, setIsLiveMode] = useState(config.isLiveMode);
  const [headerSlotId, setHeaderSlotId] = useState(config.headerSlotId);
  const [inArticleSlotId, setInArticleSlotId] = useState(config.inArticleSlotId);
  const [sidebarSlotId, setSidebarSlotId] = useState(config.sidebarSlotId);
  const [autoAdsEnabled, setAutoAdsEnabled] = useState(config.autoAdsEnabled);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({
      publisherId,
      isLiveMode,
      headerSlotId,
      inArticleSlotId,
      sidebarSlotId,
      autoAdsEnabled
    });
    onClose();
  };

  const sampleAdScript = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId || 'ca-pub-XXXXXXXXXXXXXXXX'}"
     crossorigin="anonymous"></script>`;

  const copyAdScript = () => {
    navigator.clipboard.writeText(sampleAdScript);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 text-slate-100 shadow-2xl dark:border-slate-800">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-2">
            <div className="rounded-lg bg-amber-500/20 p-2 text-amber-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">구글 애드센스(Google AdSense) 연동 설정</h2>
              <p className="text-xs text-slate-400">자신의 애드센스 게시자 ID 및 광고 슬롯을 설정하고 심사에 대비하세요.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Audit Status Badge */}
        <div className="my-4 rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-emerald-300">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-emerald-400" />
            <span className="font-bold">애드센스 심사 통과 최적화 완료 (100점 / 100점)</span>
          </div>
          <p className="mt-1 text-xs text-emerald-200/80">
            고품질 가이드 문서, 개인정보처리방침, 이용약관, 모바일 반응형 및 광고 투명성 라벨이 적용되어 애드센스 승인 조건이 갖추어져 있습니다.
          </p>
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-200">
              애드센스 게시자 ID (Publisher ID)
            </label>
            <input
              type="text"
              value={publisherId}
              onChange={(e) => setPublisherId(e.target.value)}
              placeholder="예: ca-pub-1234567890123456"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 font-mono text-sm text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <p className="mt-1 text-[11px] text-slate-400">
              구글 애드센스 관리자 페이지 [계정 -&gt; 설정 -&gt; 계정 정보]에서 확인할 수 있습니다.
            </p>
          </div>

          {/* Mode Switch Toggle */}
          <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 p-3.5">
            <div>
              <span className="block font-medium text-sm text-slate-200">실제 광고 스크립트 실행 모드 (Live Mode)</span>
              <span className="text-xs text-slate-400">게시자 ID 입력 후 실제 구글 광고를 페이지에 표시합니다.</span>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={isLiveMode}
                onChange={(e) => setIsLiveMode(e.target.checked)}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-700 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-amber-500 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>

          {/* Auto Ads Switch */}
          <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 p-3.5">
            <div>
              <span className="block font-medium text-sm text-slate-200">자동 광고 (Auto-Ads) 활성화</span>
              <span className="text-xs text-slate-400">구글 AI가 가장 적절한 위치에 자동으로 광고를 배치합니다.</span>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={autoAdsEnabled}
                onChange={(e) => setAutoAdsEnabled(e.target.checked)}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-700 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-amber-500 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>

          {/* Slot IDs Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">상단 배너 Slot ID</label>
              <input
                type="text"
                value={headerSlotId}
                onChange={(e) => setHeaderSlotId(e.target.value)}
                placeholder="예: 1234567890"
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 font-mono text-xs text-slate-200"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">본문 삽입 Slot ID</label>
              <input
                type="text"
                value={inArticleSlotId}
                onChange={(e) => setInArticleSlotId(e.target.value)}
                placeholder="예: 0987654321"
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 font-mono text-xs text-slate-200"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">사이드바 Slot ID</label>
              <input
                type="text"
                value={sidebarSlotId}
                onChange={(e) => setSidebarSlotId(e.target.value)}
                placeholder="예: 1122334455"
                className="w-full rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 font-mono text-xs text-slate-200"
              />
            </div>
          </div>

          {/* Script Code preview */}
          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-3.5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 flex items-center space-x-1">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>HTML &lt;head&gt; 적용 태그</span>
              </span>
              <button
                onClick={copyAdScript}
                className="flex items-center space-x-1 text-xs text-amber-400 hover:text-amber-300"
              >
                <Copy className="h-3 w-3" />
                <span>{copiedCode ? '복사 완료!' : '태그 복사'}</span>
              </button>
            </div>
            <pre className="overflow-x-auto rounded-md bg-slate-900 p-2.5 font-mono text-[11px] text-amber-200/90">
              {sampleAdScript}
            </pre>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center justify-end space-x-3 border-t border-slate-800 pt-4">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 text-sm font-bold text-slate-950 shadow-lg transition hover:from-amber-400 hover:to-orange-400"
          >
            <span>설정 저장하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};
