export type NavigationTab =
  | 'guide'
  | 'vscode-setup'
  | 'interactive-demo'
  | 'shortcuts'
  | 'faq'
  | 'policy-privacy'
  | 'policy-terms'
  | 'policy-about'
  | 'policy-contact';

export interface GuideStep {
  id: string;
  stepNumber: number;
  title: string;
  badge?: string;
  summary: string;
  detailedExplanation: string[];
  codeSnippets?: {
    language: string;
    filename?: string;
    code: string;
    description?: string;
  }[];
  keyTakeaways: string[];
  visualDiagramType?: 'terminal' | 'flowchart' | 'vscode-ui' | 'architecture' | 'comparison';
  imageIllustrationUrl?: string;
  tips?: string[];
  commonErrors?: { error: string; solution: string }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'setup' | 'claude-code' | 'vscode' | 'adsense' | 'billing';
}

export interface ShortcutItem {
  key: string;
  action: string;
  description: string;
  category: 'VS Code' | 'Claude Code Terminal' | 'General';
}

export interface AdSenseConfig {
  publisherId: string; // e.g. ca-pub-1234567890123456
  isLiveMode: boolean;
  headerSlotId: string;
  inArticleSlotId: string;
  sidebarSlotId: string;
  autoAdsEnabled: boolean;
}

export interface CommandHistory {
  command: string;
  response: string;
  timestamp: string;
  isAiResponse?: boolean;
}
