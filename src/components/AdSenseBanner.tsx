import React, { useEffect } from 'react';
import { AdSenseConfig } from '../types';
import { Info, Sparkles } from 'lucide-react';

interface AdSenseBannerProps {
  type: 'header' | 'in-article' | 'sidebar' | 'footer';
  config: AdSenseConfig;
  className?: string;
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  type,
  config,
  className = ''
}) => {
  const getSlotId = () => {
    switch (type) {
      case 'header':
        return config.headerSlotId;
      case 'sidebar':
        return config.sidebarSlotId;
      case 'in-article':
      default:
        return config.inArticleSlotId;
    }
  };

  const slotId = getSlotId();

  useEffect(() => {
    if (config.isLiveMode && config.publisherId && slotId) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.warn('AdSense script initialization:', err);
      }
    }
  }, [config.isLiveMode, config.publisherId, slotId]);

  // Dimensions & layout styling based on ad placement
  const getLayoutClasses = () => {
    switch (type) {
      case 'header':
        return 'w-full min-h-[90px] max-w-[728px] mx-auto my-4';
      case 'sidebar':
        return 'w-full min-h-[300px] my-4';
      case 'footer':
        return 'w-full min-h-[90px] my-6';
      case 'in-article':
      default:
        return 'w-full min-h-[250px] my-6';
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-xl border border-dashed border-amber-500/30 bg-gradient-to-br from-amber-50/40 to-orange-50/30 p-3 text-center dark:from-amber-950/20 dark:to-orange-950/10 dark:border-amber-500/20 ${getLayoutClasses()} ${className}`}>
      {/* Policy Compliant Ad Label */}
      <div className="mb-2 flex items-center justify-between text-[11px] font-medium tracking-wider text-amber-700/80 dark:text-amber-400/80 uppercase">
        <span className="flex items-center space-x-1">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500"></span>
          <span>광고 / ADVERTISEMENT</span>
        </span>
        <span className="flex items-center space-x-1 text-[10px] text-slate-500 dark:text-slate-400">
          <Info className="h-3 w-3" />
          <span>Google AdSense Ready</span>
        </span>
      </div>

      {config.isLiveMode && config.publisherId ? (
        /* Real Google AdSense Tag Injection */
        <div className="adsense-container w-full overflow-hidden">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={config.publisherId}
            data-ad-slot={slotId || '1234567890'}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      ) : (
        /* Interactive Placeholder Mode showing AdSense readiness */
        <div className="flex flex-col items-center justify-center py-6 px-4">
          <div className="mb-2 rounded-full bg-amber-100 p-2.5 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            구글 애드센스 최적화 광고 영역 ({type.toUpperCase()})
          </p>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 max-w-sm">
            {config.publisherId
              ? `게시자 ID: ${config.publisherId} | 라이브 모드를 켜면 실제 광고가 표시됩니다.`
              : '상단 [애드센스 설정] 메뉴에서 자신의 ca-pub ID를 입력하면 즉시 실제 광고가 연동됩니다.'}
          </p>
          <div className="mt-3 flex items-center space-x-2 text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
            <span>규격: {type === 'sidebar' ? '300x250 / 300x600' : '728x90 / 반응형 디스플레이'}</span>
            <span>•</span>
            <span>AdSense Policy Verified</span>
          </div>
        </div>
      )}
    </div>
  );
};
