import { Lang } from '../i18n';

export interface UiText {
  header: {
    tagline: string;
    navGuide: string;
    navVscode: string;
    navDemo: string;
    navShortcuts: string;
    navFaq: string;
    searchPlaceholder: string;
    searchPlaceholderMobile: string;
    legalMenu: string;
    privacyPolicy: string;
    termsOfService: string;
    aboutUs: string;
    lightMode: string;
    darkMode: string;
    langSwitchLabel: string;
  };
  footer: {
    brandDescription: string;
    quickGuideHeading: string;
    quickGuideItems: string[];
    legalHeading: string;
    privacyPolicy: string;
    termsOfService: string;
    aboutUs: string;
    adDisclaimerHeading: string;
    adDisclaimerText: string;
    copyright: string;
  };
  toc: {
    heading: string;
  };
  hero: {
    pill: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    description: string;
    ctaDemo: string;
    ctaDiagram: string;
  };
  tabs: {
    guide: string;
    vscodeSetup: string;
    demo: string;
    shortcuts: string;
    faq: string;
  };
  guideCard: {
    summaryLabel: string;
    keyTakeawaysHeading: string;
    tipHeading: string;
    errorsHeading: string;
    solutionLabel: string;
  };
  vscodeSetupExtra: {
    heading: string;
    intro: string;
    listItems: string[];
  };
  demoTab: {
    calloutLabel: string;
  };
  shortcutsTab: {
    heading: string;
    subtitle: string;
  };
  faqTab: {
    heading: string;
    subtitle: string;
  };
  vscodeDiagram: {
    badge: string;
    heading: string;
    description: string;
    layer1Title: string;
    layer1Desc: string;
    layer1Items: string[];
    layer2Title: string;
    layer2Desc: string;
    layer2Items: string[];
    layer3Title: string;
    layer3Desc: string;
    layer3Items: string[];
    workflowHeading: string;
    workflowStep1: string;
    workflowStep1Sub: string;
    workflowStep2: string;
    workflowStep2Sub: string;
    workflowStep3: string;
    workflowStep3Sub: string;
    workflowStep4: string;
    workflowStep4Sub: string;
  };
  terminal: {
    windowTitle: string;
    agentActive: string;
    explorer: string;
    presetLabel: string;
    presetDarkMode: string;
    presetInit: string;
    presetCost: string;
    presetDarkModePrompt: string;
    terminalPanelTitle: string;
    inputPlaceholder: string;
    processing: string;
    localeTag: string;
  };
  codeBlock: {
    copyTitle: string;
    copied: string;
    copy: string;
  };
  policyModal: {
    legalBadge: string;
    contactHeading: string;
    contactSuccessTitle: string;
    contactSuccessBody: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    lastUpdatedLabel: string;
    closeButton: string;
  };
}

export const UI_TEXT: Record<Lang, UiText> = {
  ko: {
    header: {
      tagline: '초보자를 위한 완벽 연동 및 코딩 가이드',
      navGuide: '연동 가이드',
      navVscode: 'VS Code 구조',
      navDemo: '체험 터미널',
      navShortcuts: '단축키',
      navFaq: '자주 묻는 질문',
      searchPlaceholder: '가이드 및 명령어 검색...',
      searchPlaceholderMobile: '가이드 검색...',
      legalMenu: '법적 방침',
      privacyPolicy: '개인정보처리방침',
      termsOfService: '이용약관',
      aboutUs: '사이트 소개',
      lightMode: '라이트 모드',
      darkMode: '다크 모드',
      langSwitchLabel: '언어'
    },
    footer: {
      brandDescription: '개발자 및 학습자를 위해 Visual Studio Code와 Claude Code CLI의 연동 및 실전 활용법을 제공하는 전문 정보 미디어입니다.',
      quickGuideHeading: '핵심 가이드',
      quickGuideItems: [
        'Node.js & Claude Code CLI 설치',
        'VS Code 내장 터미널 단축키 설정',
        'CLAUDE.md 규칙 작성 및 자동 생성',
        '실전 프롬프트 & 비용 관리 절약 팁'
      ],
      legalHeading: '필수 법적 고지 (Legal Pages)',
      privacyPolicy: '개인정보처리방침 (Privacy Policy)',
      termsOfService: '이용약관 (Terms of Service)',
      aboutUs: '사이트 소개 (About Us)',
      adDisclaimerHeading: '광고 및 면책 고지',
      adDisclaimerText: '본 사이트는 구글 애드센스 광고를 게재하며, 이용자의 방문 기록을 바탕으로 DART 쿠키 기반의 맞춤형 광고를 제공할 수 있습니다.',
      copyright: '© 2026 VS Code x Claude Code Guide. All rights reserved.'
    },
    toc: {
      heading: '가이드 목차 (TOC)'
    },
    hero: {
      pill: 'Anthropic Claude Code x VS Code 완전 정복 가이드',
      titleBefore: 'VS Code와 ',
      titleHighlight: 'Claude Code',
      titleAfter: ' 연동 가이드',
      description: '터미널 네이티브 AI 에이전트인 Claude Code를 Visual Studio Code 내장 터미널에 연결하여 파일 생성, 버그 수정, git 관리까지 자동으로 처리하는 현대적 코딩 방식을 쉬운 도해와 시뮬레이션으로 배워보세요.',
      ctaDemo: '체험 터미널 시뮬레이터 실행',
      ctaDiagram: 'VS Code 구조 도해 보기'
    },
    tabs: {
      guide: '단계별 연동 가이드',
      vscodeSetup: 'VS Code 화면 구조',
      demo: '체험 터미널 (Live Demo)',
      shortcuts: '단축키 모음집',
      faq: '자주 묻는 질문 (FAQ)'
    },
    guideCard: {
      summaryLabel: '핵심요약:',
      keyTakeawaysHeading: '이 단계에서 꼭 기억할 점',
      tipHeading: '전문가 TIP',
      errorsHeading: '자주 발생하는 트러블슈팅 오류',
      solutionLabel: '해결법:'
    },
    vscodeSetupExtra: {
      heading: 'VS Code 터미널 분할 및 환경 최적화 추천 레시피',
      intro: 'VS Code에서 Claude Code를 사용할 때 가장 권장되는 레이아웃은 **터미널 2개 분할 배치**입니다.',
      listItems: [
        'VS Code에서 Ctrl + ` 키를 눌러 내장 터미널을 열어줍니다.',
        '터미널 상단 오른쪽 우측 메뉴의 [패널 분할(Split Terminal)] 아이콘을 누릅니다.',
        '좌측 패널에서는 개발 서버(npm run dev)를 켜두고, 우측 패널에서는 claude를 실행합니다.',
        '이렇게 구성하면 Claude가 코드를 수정할 때 좌측 개발 서버에 핫 리로딩(Hot Reloading)이 일어나는 모습을 실시간 모니터링할 수 있습니다!'
      ]
    },
    demoTab: {
      calloutLabel: '직접 체험해보기:'
    },
    shortcutsTab: {
      heading: 'VS Code & Claude Code 필살 단축키 모음집',
      subtitle: '작업 속도를 3배 높여주는 핵심 명령어 치트시트'
    },
    faqTab: {
      heading: '자주 묻는 질문 (FAQ)',
      subtitle: 'VS Code 연동 및 구글 애드센스 정책 관련 흔한 질문 모음'
    },
    vscodeDiagram: {
      badge: '시각적 구조 도해 (Visual Architecture Diagram)',
      heading: 'VS Code x Claude Code 연동 화면 구조 분석',
      description: 'VS Code의 내장 터미널에서 Claude Code 에이전트가 동작하는 3단계 핵심 레이어 구조입니다.',
      layer1Title: 'VS Code 에디터 & 워크스페이스',
      layer1Desc: '프로젝트 파일 구조(App.tsx, package.json, CLAUDE.md)가 배치되는 작업 공간입니다.',
      layer1Items: ['실시간 코드 구문 강조 (Syntax Highlighting)', 'Git 변경사항 Diff 자동 감지'],
      layer2Title: '내장 터미널 (Ctrl + `)',
      layer2Desc: 'VS Code 하단 단축키로 활성화되는 터미널 패널입니다. claude 명령어를 통해 실행됩니다.',
      layer2Items: ['자연어로 개발 지시 전달', '/init, /cost 슬래시 커맨드 지원'],
      layer3Title: 'Claude Code 에이전트 엔진',
      layer3Desc: 'Anthropic의 Claude 3.5 Sonnet 모델 기반으로 파일 수정, 명령어 실행을 직접 제어합니다.',
      layer3Items: ['파일 직접 생성 및 리팩토링', 'CLAUDE.md 지침 자동 준수'],
      workflowHeading: '작업 흐름도 (Workflow)',
      workflowStep1: '1. VS Code 터미널 열기',
      workflowStep1Sub: 'Ctrl + `',
      workflowStep2: '2. claude 명령어 입력',
      workflowStep2Sub: '세션 시작 및 인증',
      workflowStep3: '3. 자연어로 요구사항 작성',
      workflowStep3Sub: '"버그 수정해줘"',
      workflowStep4: '4. 코드 자동 수정 및 테스트',
      workflowStep4Sub: 'VS Code 즉시 반영'
    },
    terminal: {
      windowTitle: 'VS Code Editor — my-awesome-app (Claude Code Live Simulator)',
      agentActive: 'Claude Agent Active',
      explorer: 'EXPLORER',
      presetLabel: '원클릭 시뮬레이션 버튼:',
      presetDarkMode: '⚡ 다크모드 기능 구현',
      presetInit: '📜 /init (CLAUDE.md 생성)',
      presetCost: '💵 /cost (사용량 조회)',
      presetDarkModePrompt: 'claude "App.tsx에 다크모드 버튼 추가해줘"',
      terminalPanelTitle: 'INTEGRATED TERMINAL (Claude Code CLI)',
      inputPlaceholder: "예: claude '버그 수정해줘' 또는 /init, /cost 입력 후 Enter",
      processing: 'Claude Code agent is inspecting project files & writing code...',
      localeTag: 'ko-KR'
    },
    codeBlock: {
      copyTitle: '코드 복사',
      copied: '복사됨!',
      copy: '복사'
    },
    policyModal: {
      legalBadge: 'Legal & Compliance',
      contactHeading: '운영자 1:1 문의 접수',
      contactSuccessTitle: '문의가 성공적으로 접수되었습니다!',
      contactSuccessBody: '확인 후 입력해주신 이메일로 빠르게 답변해 드리겠습니다.',
      nameLabel: '성함 또는 닉네임',
      namePlaceholder: '홍길동',
      emailLabel: '이메일 주소',
      emailPlaceholder: 'user@example.com',
      messageLabel: '문의 내용',
      messagePlaceholder: 'VS Code x Claude Code 가이드 관련 문의사항을 남겨주세요.',
      sendButton: '문의 보내기',
      lastUpdatedLabel: '최종 수정일:',
      closeButton: '닫기'
    }
  },
  en: {
    header: {
      tagline: 'The complete beginner-friendly integration & coding guide',
      navGuide: 'Guide',
      navVscode: 'VS Code Layout',
      navDemo: 'Live Terminal',
      navShortcuts: 'Shortcuts',
      navFaq: 'FAQ',
      searchPlaceholder: 'Search guides and commands...',
      searchPlaceholderMobile: 'Search the guide...',
      legalMenu: 'Legal',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      aboutUs: 'About Us',
      lightMode: 'Light mode',
      darkMode: 'Dark mode',
      langSwitchLabel: 'Language'
    },
    footer: {
      brandDescription: 'A dedicated media site for developers and learners, covering how to integrate and put Visual Studio Code and the Claude Code CLI to work in real projects.',
      quickGuideHeading: 'Core Guides',
      quickGuideItems: [
        'Installing Node.js & the Claude Code CLI',
        'Setting up VS Code integrated-terminal shortcuts',
        'Writing and auto-generating CLAUDE.md rules',
        'Real-world prompting & cost-saving tips'
      ],
      legalHeading: 'Legal Pages',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      aboutUs: 'About Us',
      adDisclaimerHeading: 'Advertising & Disclaimer',
      adDisclaimerText: 'This site serves Google AdSense ads and may show personalized ads based on your visit history using the DART cookie.',
      copyright: '© 2026 VS Code x Claude Code Guide. All rights reserved.'
    },
    toc: {
      heading: 'Table of Contents'
    },
    hero: {
      pill: 'The Complete Anthropic Claude Code x VS Code Mastery Guide',
      titleBefore: 'The VS Code x ',
      titleHighlight: 'Claude Code',
      titleAfter: ' Integration Guide',
      description: 'Learn how to connect Claude Code — a terminal-native AI agent — to VS Code’s integrated terminal so it can create files, fix bugs, and manage git for you automatically. This modern coding workflow is explained with easy diagrams and hands-on simulations.',
      ctaDemo: 'Launch the Live Terminal Simulator',
      ctaDiagram: 'View the VS Code Layout Diagram'
    },
    tabs: {
      guide: 'Step-by-Step Guide',
      vscodeSetup: 'VS Code Layout',
      demo: 'Live Terminal (Demo)',
      shortcuts: 'Shortcut Collection',
      faq: 'FAQ'
    },
    guideCard: {
      summaryLabel: 'Key Summary:',
      keyTakeawaysHeading: 'Key Takeaways for This Step',
      tipHeading: 'Expert Tip',
      errorsHeading: 'Common Troubleshooting Errors',
      solutionLabel: 'Solution:'
    },
    vscodeSetupExtra: {
      heading: 'Recommended Recipe: Splitting the VS Code Terminal & Optimizing Your Setup',
      intro: 'When using Claude Code in VS Code, the most recommended layout is a **two-way split terminal**.',
      listItems: [
        'In VS Code, press Ctrl + ` to open the integrated terminal.',
        'Click the [Split Terminal] icon in the top-right corner of the terminal panel.',
        'Keep the dev server (npm run dev) running in the left pane, and run claude in the right pane.',
        'With this setup, you can watch hot reloading happen live in the left dev-server pane as Claude edits your code!'
      ]
    },
    demoTab: {
      calloutLabel: 'Try it yourself:'
    },
    shortcutsTab: {
      heading: 'The Ultimate VS Code & Claude Code Shortcut Collection',
      subtitle: 'A cheat sheet of the key commands that triple your workflow speed'
    },
    faqTab: {
      heading: 'Frequently Asked Questions (FAQ)',
      subtitle: 'Common questions about VS Code integration and our Google AdSense policy'
    },
    vscodeDiagram: {
      badge: 'Visual Architecture Diagram',
      heading: 'How VS Code and Claude Code Fit Together',
      description: 'The three core layers at work when the Claude Code agent runs inside VS Code’s integrated terminal.',
      layer1Title: 'VS Code Editor & Workspace',
      layer1Desc: 'The workspace where your project files (App.tsx, package.json, CLAUDE.md) live.',
      layer1Items: ['Real-time syntax highlighting', 'Automatic Git change/diff detection'],
      layer2Title: 'Integrated Terminal (Ctrl + `)',
      layer2Desc: 'The terminal panel activated from the bottom of VS Code. Launched with the claude command.',
      layer2Items: ['Give development instructions in natural language', 'Supports /init, /cost slash commands'],
      layer3Title: 'Claude Code Agent Engine',
      layer3Desc: 'Built on Anthropic’s Claude 3.5 Sonnet model, directly controlling file edits and command execution.',
      layer3Items: ['Creates and refactors files directly', 'Automatically follows CLAUDE.md instructions'],
      workflowHeading: 'Workflow',
      workflowStep1: '1. Open the VS Code terminal',
      workflowStep1Sub: 'Ctrl + `',
      workflowStep2: '2. Type the claude command',
      workflowStep2Sub: 'Start the session & authenticate',
      workflowStep3: '3. Describe what you need in plain English',
      workflowStep3Sub: '"Fix this bug"',
      workflowStep4: '4. Code is fixed and tested automatically',
      workflowStep4Sub: 'Reflected instantly in VS Code'
    },
    terminal: {
      windowTitle: 'VS Code Editor — my-awesome-app (Claude Code Live Simulator)',
      agentActive: 'Claude Agent Active',
      explorer: 'EXPLORER',
      presetLabel: 'One-click simulation buttons:',
      presetDarkMode: '⚡ Implement dark mode',
      presetInit: '📜 /init (generate CLAUDE.md)',
      presetCost: '💵 /cost (check usage)',
      presetDarkModePrompt: 'claude "Add a dark mode button to App.tsx"',
      terminalPanelTitle: 'INTEGRATED TERMINAL (Claude Code CLI)',
      inputPlaceholder: "e.g. claude 'fix this bug' or type /init, /cost, then press Enter",
      processing: 'Claude Code agent is inspecting project files & writing code...',
      localeTag: 'en-US'
    },
    codeBlock: {
      copyTitle: 'Copy code',
      copied: 'Copied!',
      copy: 'Copy'
    },
    policyModal: {
      legalBadge: 'Legal & Compliance',
      contactHeading: 'Contact the Site Operator',
      contactSuccessTitle: 'Your message has been sent successfully!',
      contactSuccessBody: 'We’ll review it and get back to you quickly at the email address you provided.',
      nameLabel: 'Name or nickname',
      namePlaceholder: 'Jane Doe',
      emailLabel: 'Email address',
      emailPlaceholder: 'user@example.com',
      messageLabel: 'Your message',
      messagePlaceholder: 'Leave your question about the VS Code x Claude Code Guide here.',
      sendButton: 'Send message',
      lastUpdatedLabel: 'Last updated:',
      closeButton: 'Close'
    }
  }
};
