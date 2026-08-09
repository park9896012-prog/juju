import React, { useState } from 'react';
import { Check, Copy, Terminal, FileCode } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  description?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  filename,
  description
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900 text-slate-100 shadow-xl">
      {/* Code Header bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-2.5 text-xs">
        <div className="flex items-center space-x-2">
          {language === 'bash' ? (
            <Terminal className="h-4 w-4 text-emerald-400" />
          ) : (
            <FileCode className="h-4 w-4 text-blue-400" />
          )}
          {filename ? (
            <span className="font-mono font-medium text-slate-200">{filename}</span>
          ) : (
            <span className="font-mono uppercase text-slate-400">{language}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1.5 rounded-md bg-slate-800/80 px-2.5 py-1 text-slate-300 transition hover:bg-slate-700 hover:text-white"
          title="코드 복사"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">복사됨!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>복사</span>
            </>
          )}
        </button>
      </div>

      {/* Description if present */}
      {description && (
        <div className="border-b border-slate-800/60 bg-slate-900/50 px-4 py-1.5 text-xs text-slate-400">
          💡 {description}
        </div>
      )}

      {/* Code Body */}
      <div className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-emerald-300">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
