import { GuideStep, FAQItem, ShortcutItem } from '../types';
import { Lang } from '../i18n';

export const GUIDE_STEPS: Record<Lang, GuideStep[]> = {
  ko: [
    {
      id: 'step-1-overview',
      stepNumber: 1,
      title: 'Claude Code와 VS Code 연동의 개념 이해하기',
      badge: '필수 기본 개념',
      summary: 'Anthropic의 터미널 기반 AI 에이전트 Claude Code가 무엇이며, 왜 VS Code와 함께 사용할 때 생산성이 극대화되는지 직관적으로 알아봅니다.',
      detailedExplanation: [
        'Claude Code는 Anthropic이 개발한 차세대 터미널 전용 에이전틱(Agentic) AI 코딩 도구입니다. 기존 채팅창 방식의 AI와 달리, 사용자의 로컬 파일 시스템을 직접 이해하고 코드 수정, 버그 수정, 빌드 및 git 커밋까지 직접 수행합니다.',
        'VS Code(Visual Studio Code)는 전 세계 개발자들이 가장 많이 사용하는 강력한 무료 코드 에디터입니다.',
        '이 둘을 연동하면 VS Code의 내장 터미널(Integrated Terminal) 속에서 Claude Code가 활성화되어, 코드를 실시간으로 모니터링하면서 AI에게 자연어로 개발 지시를 내릴 수 있는 최상의 개발 환경이 완성됩니다.'
      ],
      keyTakeaways: [
        'Claude Code는 터미널 기반이므로 VS Code 내장 터미널(Ctrl + `)과 완벽하게 궁합이 맞습니다.',
        '코드 수정을 직접 파일에 반영해주므로 복사-붙여넣기 과정이 필요 없습니다.',
        '프로젝트 전체 구조와 Git 상태를 자동으로 감지하여 맥락을 파악합니다.'
      ],
      visualDiagramType: 'architecture',
      tips: [
        'VS Code의 화면을 분할하여 좌측에는 코드 에디터, 우측에는 내장 터미널을 배치하면 가장 효율적입니다.',
        'Anthropic Console에서 발급받은 API Key 또는 Claude Pro/Team 계정이 필요합니다.'
      ]
    },
    {
      id: 'step-2-prerequisites',
      stepNumber: 2,
      title: '사전 준비사항 설치 (Node.js & VS Code)',
      badge: '환경 구축',
      summary: 'Claude Code를 실행하기 위해 컴퓨터에 반드시 설치되어 있어야 하는 Node.js 환경과 VS Code를 준비합니다.',
      detailedExplanation: [
        'Claude Code CLI는 Node.js 패키지 형태(@anthropic-ai/claude-code)로 제공되므로, Node.js v18.0.0 이상의 버전을 먼저 설치해야 합니다.',
        '터미널(Windows 명령 프롬프트 또는 Mac 터미널)을 열고 `node -v`와 `npm -v`를 입력하여 설치 여부를 확인합니다.',
        '만약 Node.js가 설치되어 있지 않다면 공식 홈페이지(nodejs.org)에서 LTS 버전을 다운로드하여 설치합니다.'
      ],
      codeSnippets: [
        {
          language: 'bash',
          filename: 'Terminal / Command Prompt',
          code: `# Node.js 버전 확인 (v18.0.0 이상 필요)
node -v

# npm 버전을 확인
npm -v`,
          description: 'Node.js 및 npm 설치 확인 명령어'
        }
      ],
      keyTakeaways: [
        'Node.js LTS 버전 권장 (v18 이상)',
        'VS Code 최신 버전 설치 권장',
        '터미널 환경에서 npm 명령어 접근이 가능해야 함'
      ],
      visualDiagramType: 'flowchart',
      commonErrors: [
        {
          error: "'node'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.",
          solution: 'Node.js 설치 시 "Add to PATH" 옵션을 체크하고 설치 후 컴퓨터 또는 터미널을 재부팅하세요.'
        }
      ]
    },
    {
      id: 'step-3-install-claude-code',
      stepNumber: 3,
      title: 'Claude Code CLI 전역 설치 및 로그인',
      badge: '핵심 설치 단계',
      summary: 'npm을 통해 Claude Code를 시스템 전역에 설치하고, Anthropic 계정으로 최초 인증을 완료합니다.',
      detailedExplanation: [
        'VS Code의 터미널이나 컴퓨터의 일반 터미널을 엽니다.',
        '다음 명령어를 입력하여 Claude Code 패키지를 전역(-g)으로 설치합니다: `npm install -g @anthropic-ai/claude-code`',
        '설치가 완료된 후 터미널에 `claude`를 입력하면 처음 사용 시 브라우저가 자동으로 열리며 Anthropic 로그인 인증 화면으로 이동합니다.',
        '로그인이 완료되면 액세스 토큰이 자동으로 저장되어 바로 이용이 가능해집니다.'
      ],
      codeSnippets: [
        {
          language: 'bash',
          filename: 'VS Code Terminal (Ctrl + `)',
          code: `# 1. Claude Code CLI 글로벌 설치
npm install -g @anthropic-ai/claude-code

# 2. 설치 확인 및 최초 로그인 실행
claude`,
          description: 'Claude Code 설치 및 인증 실행'
        }
      ],
      keyTakeaways: [
        'npm -g 옵션을 사용하여 어디서나 claude 명령어를 부를 수 있습니다.',
        '최초 1회 브라우저 로그인 인증 필요',
        '인증 후 설정 파일(~/.claude.json)에 키가 안전하게 보관됩니다.'
      ],
      visualDiagramType: 'terminal',
      tips: [
        'Mac/Linux 사용자의 경우 권한 오류(EACCES)가 발생하면 `sudo npm install -g @anthropic-ai/claude-code`로 실행하거나 nvm 환경을 이용하세요.'
      ]
    },
    {
      id: 'step-4-vscode-integration',
      stepNumber: 4,
      title: 'VS Code 내장 터미널 연동 및 작업 환경 설정',
      badge: 'VS Code 최적화',
      summary: 'VS Code 내부에서 Claude Code를 편하게 호출하고 조작할 수 있도록 단축키, 터미널 분할 및 Task 설정을 구성합니다.',
      detailedExplanation: [
        'VS Code 실행 후 프로젝트 폴더를 엽니다: `File -> Open Folder`',
        '단축키 `Ctrl + \`` (Mac: `Cmd + \``)를 눌러 VS Code 내장 터미널을 엽니다.',
        '터미널에 `claude`를 입력하면 현재 연 폴더가 Claude Code의 작업 컨텍스트(Root)로 지정되어 바로 작동합니다.',
        '더욱 직관적인 작업을 위해 VS Code `.vscode/tasks.json` 파일에 Claude 전용 태스크를 추가하면 클릭 한 번으로 실행할 수 있습니다.'
      ],
      codeSnippets: [
        {
          language: 'json',
          filename: '.vscode/tasks.json',
          code: `{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run Claude Code",
      "type": "shell",
      "command": "claude",
      "problemMatcher": [],
      "presentation": {
        "reveal": "always",
        "panel": "dedicated",
        "focus": true
      }
    }
  ]
}`,
          description: 'VS Code 전용 Claude Code 태스크 자동화 설정'
        }
      ],
      keyTakeaways: [
        'VS Code 내장 터미널에서 실행하면 편집 중인 파일 경로가 자동으로 공유됩니다.',
        'Terminal Panel 분할 기능을 이용해 서버 실행 화면과 Claude 화면을 동시에 볼 수 있습니다.',
        'VS Code 전용 확장 프로그램(Claude Code)이 마켓플레이스에 있는 경우 함께 설치하면 UI 편의성이 상승합니다.'
      ],
      visualDiagramType: 'vscode-ui'
    },
    {
      id: 'step-5-claude-md-config',
      stepNumber: 5,
      title: '프로젝트 규칙 파일 (CLAUDE.md) 작성법',
      badge: '생산성 200% 향상',
      summary: '프로젝트 루트에 CLAUDE.md 파일을 작성하여 Claude Code에게 코딩 스타일, 프로젝트 명령어, 주의사항을 사전에 학습시킵니다.',
      detailedExplanation: [
        'Claude Code는 시작될 때 프로젝트 루트 폴더에 위치한 `CLAUDE.md` 파일의 내용을 가장 먼저 읽고 그 지침에 따라 행동합니다.',
        '빌드 명령어, 테스트 실행법, 코딩 스타일 컨벤션(예: Tailwind CSS 사용, TypeScript 사용 등)을 적어두면 AI가 항상 프로젝트 규격에 맞춰 코드를 작성합니다.',
        '터미널에서 `claude` 실행 후 `/init` 명령어를 입력하면 프로젝트 구조를 분석하여 자동으로 `CLAUDE.md` 초안을 생성해 줍니다!'
      ],
      codeSnippets: [
        {
          language: 'markdown',
          filename: 'CLAUDE.md (프로젝트 루트)',
          code: `# Project Overview
React + TypeScript + Tailwind CSS 웹 애플리케이션 프로젝트입니다.

## Build & Test Commands
- Dev Server: npm run dev
- Build: npm run build
- Lint: npm run lint

## Code Style Guidelines
- 모든 컴포넌트는 TypeScript 함수형 컴포넌트로 작성합니다.
- 아이콘은 lucide-react만 사용합니다.
- Inline CSS 금지, Tailwind CSS 클래스 활용.
- 상태 관리는 React Context 또는 Custom Hook으로 분리합니다.`,
          description: '권장 CLAUDE.md 예시 template'
        }
      ],
      keyTakeaways: [
        'CLAUDE.md는 AI를 위한 전용 지침서(Rule Engine)입니다.',
        '터미널에서 `/init` 명령어로 자동 생성 가능합니다.',
        '팀 전체가 공통된 AI 코딩 기준을 유지하도록 돕습니다.'
      ],
      visualDiagramType: 'comparison'
    },
    {
      id: 'step-6-realworld-examples',
      stepNumber: 6,
      title: '실전 코딩 활용 패턴 (버그 수정, 기능 추가, 리팩토링)',
      badge: '실전 활용법',
      summary: 'Claude Code에게 효과적으로 프롬프트를 전달하여 실제 개발 업무를 능수능란하게 다루는 실전 시나리오를 알아봅니다.',
      detailedExplanation: [
        '1. 버그 수정: "App.tsx에서 버튼 클릭 시 반응 없는 오류 해결해줘"라고 자연어로 지시하면, Claude가 파일들을 탐색하고 원인을 찾아 코드를 자동 수정합니다.',
        '2. 신규 기능 추가: "사용자 다크모드 토글 버튼 및 상태 기억 로직 만들어줘"라고 요청하면 관련 파일 작성 및 기존 파일 연동까지 한번에 처리합니다.',
        '3. 커밋 메시지 작성: 작업을 마친 후 `/compact` 또는 git 커밋 요청을 하면 현재 변경된 diff를 분석해 깔끔한 커밋 메시지를 생성합니다.'
      ],
      codeSnippets: [
        {
          language: 'bash',
          filename: 'Claude Code Terminal Prompt Examples',
          code: `# 예시 1: 자연어로 버그 제보
claude "src/components/Header.tsx 파일에서 모바일 메뉴 클릭 시 드로어가 닫히지 않는 버그 수정해줘"

# 예시 2: 기능 구현 지시
claude "App.tsx에 구글 애드센스 광고를 삽입할 수 있는 AdBanner 컴포넌트 추가하고 적용해줘"

# 예시 3: 비용 및 토큰 사용량 확인
/cost`,
          description: '실무에서 바로 쓰는 프롬프트 패턴'
        }
      ],
      keyTakeaways: [
        '파일명과 구체적인 요청 사항을 명시할수록 정확도가 상승합니다.',
        'Claude가 제안하는 코드 변경사항(Diff)을 터미널에서 Y/N으로 확인 후 승인합니다.',
        '수정된 결과는 VS Code에서 즉시 반영되므로 바로 테스트해볼 수 있습니다.'
      ]
    }
  ],
  en: [
    {
      id: 'step-1-overview',
      stepNumber: 1,
      title: 'Understanding Claude Code + VS Code Integration',
      badge: 'Essential Concept',
      summary: 'Get an intuitive overview of what Claude Code — Anthropic\'s terminal-based AI agent — is, and why pairing it with VS Code maximizes your productivity.',
      detailedExplanation: [
        'Claude Code is a next-generation, terminal-native agentic AI coding tool built by Anthropic. Unlike traditional chat-based AI, it directly understands your local file system and can edit code, fix bugs, run builds, and even make git commits on its own.',
        'VS Code (Visual Studio Code) is the powerful, free code editor used by more developers worldwide than any other.',
        'Combining the two activates Claude Code right inside VS Code\'s Integrated Terminal, giving you the ultimate development environment: it monitors your code in real time while you issue instructions in plain natural language.'
      ],
      keyTakeaways: [
        'Because Claude Code is terminal-based, it pairs perfectly with VS Code\'s built-in terminal (Ctrl + `).',
        'It writes code changes directly to your files, so there\'s no copy-pasting required.',
        'It automatically detects your whole project structure and Git status to understand context.'
      ],
      visualDiagramType: 'architecture',
      tips: [
        'For maximum efficiency, split your VS Code screen with the code editor on the left and the integrated terminal on the right.',
        'You\'ll need an API key issued from the Anthropic Console, or a Claude Pro/Team account.'
      ]
    },
    {
      id: 'step-2-prerequisites',
      stepNumber: 2,
      title: 'Installing the Prerequisites (Node.js & VS Code)',
      badge: 'Environment Setup',
      summary: 'Set up the Node.js runtime and VS Code that must be installed on your machine before you can run Claude Code.',
      detailedExplanation: [
        'The Claude Code CLI ships as a Node.js package (@anthropic-ai/claude-code), so you\'ll need Node.js v18.0.0 or later installed first.',
        'Open a terminal (Windows Command Prompt or macOS Terminal) and run `node -v` and `npm -v` to check whether they\'re installed.',
        'If Node.js isn\'t installed, download the LTS version from the official site (nodejs.org) and install it.'
      ],
      codeSnippets: [
        {
          language: 'bash',
          filename: 'Terminal / Command Prompt',
          code: `# Check Node.js version (v18.0.0 or later required)
node -v

# Check npm version
npm -v`,
          description: 'Commands to verify your Node.js and npm installation'
        }
      ],
      keyTakeaways: [
        'The Node.js LTS release (v18+) is recommended.',
        'Installing the latest version of VS Code is recommended.',
        'You need terminal access to the npm command.'
      ],
      visualDiagramType: 'flowchart',
      commonErrors: [
        {
          error: "'node' is not recognized as an internal or external command, operable program or batch file.",
          solution: 'When installing Node.js, make sure the "Add to PATH" option is checked, then restart your computer or terminal after installation.'
        }
      ]
    },
    {
      id: 'step-3-install-claude-code',
      stepNumber: 3,
      title: 'Installing the Claude Code CLI Globally & Signing In',
      badge: 'Core Setup Step',
      summary: 'Install Claude Code globally on your system via npm and complete first-time authentication with your Anthropic account.',
      detailedExplanation: [
        'Open the VS Code terminal, or any terminal on your computer.',
        'Run the following command to install the Claude Code package globally (-g): `npm install -g @anthropic-ai/claude-code`',
        'After installation finishes, type `claude` in the terminal — the first time you run it, your browser opens automatically and takes you to the Anthropic sign-in screen.',
        'Once you sign in, your access token is saved automatically and you\'re ready to go.'
      ],
      codeSnippets: [
        {
          language: 'bash',
          filename: 'VS Code Terminal (Ctrl + `)',
          code: `# 1. Install the Claude Code CLI globally
npm install -g @anthropic-ai/claude-code

# 2. Verify the install and sign in for the first time
claude`,
          description: 'Install Claude Code and run first-time authentication'
        }
      ],
      keyTakeaways: [
        'The npm -g flag lets you call the claude command from anywhere.',
        'A one-time browser sign-in is required.',
        'After authentication, your key is stored safely in the config file (~/.claude.json).'
      ],
      visualDiagramType: 'terminal',
      tips: [
        'On Mac/Linux, if you get a permissions error (EACCES), run `sudo npm install -g @anthropic-ai/claude-code`, or use an nvm-managed Node environment instead.'
      ]
    },
    {
      id: 'step-4-vscode-integration',
      stepNumber: 4,
      title: 'Integrating VS Code\'s Built-in Terminal & Configuring Your Workspace',
      badge: 'VS Code Optimization',
      summary: 'Set up shortcuts, split terminals, and tasks so you can conveniently call and control Claude Code from inside VS Code.',
      detailedExplanation: [
        'Open VS Code and open your project folder: `File -> Open Folder`',
        'Press `Ctrl + \`` (Mac: `Cmd + \``) to open the VS Code integrated terminal.',
        'Type `claude` in the terminal — the currently open folder is automatically set as Claude Code\'s working context (root), and it starts right away.',
        'For an even smoother workflow, add a dedicated Claude task to your `.vscode/tasks.json` file so you can launch it with a single click.'
      ],
      codeSnippets: [
        {
          language: 'json',
          filename: '.vscode/tasks.json',
          code: `{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run Claude Code",
      "type": "shell",
      "command": "claude",
      "problemMatcher": [],
      "presentation": {
        "reveal": "always",
        "panel": "dedicated",
        "focus": true
      }
    }
  ]
}`,
          description: 'A VS Code task that automates launching Claude Code'
        }
      ],
      keyTakeaways: [
        'Running it from the integrated terminal automatically shares the path of the file you\'re editing.',
        'Split the terminal panel to view your dev server and Claude side by side at the same time.',
        'If a dedicated VS Code extension (Claude Code) is available on the marketplace, installing it further improves the UI experience.'
      ],
      visualDiagramType: 'vscode-ui'
    },
    {
      id: 'step-5-claude-md-config',
      stepNumber: 5,
      title: 'How to Write Your Project Rules File (CLAUDE.md)',
      badge: '200% Productivity Boost',
      summary: 'Write a CLAUDE.md file at your project root to teach Claude Code your coding style, project commands, and things to watch out for ahead of time.',
      detailedExplanation: [
        'When Claude Code starts, the first thing it reads is the `CLAUDE.md` file at your project root, and it follows those instructions from then on.',
        'Write down your build commands, how to run tests, and coding-style conventions (e.g., using Tailwind CSS, using TypeScript) so the AI always writes code that matches your project\'s standards.',
        'Run `claude` in the terminal, then type the `/init` command — it will analyze your project structure and automatically generate a draft `CLAUDE.md` for you!'
      ],
      codeSnippets: [
        {
          language: 'markdown',
          filename: 'CLAUDE.md (project root)',
          code: `# Project Overview
A React + TypeScript + Tailwind CSS web application project.

## Build & Test Commands
- Dev Server: npm run dev
- Build: npm run build
- Lint: npm run lint

## Code Style Guidelines
- Write every component as a TypeScript functional component.
- Use lucide-react for icons only.
- No inline CSS — use Tailwind CSS classes.
- Keep state management in React Context or custom hooks.`,
          description: 'A recommended CLAUDE.md example template'
        }
      ],
      keyTakeaways: [
        'CLAUDE.md is a dedicated rule engine — instructions written just for the AI.',
        'You can auto-generate it in the terminal with the `/init` command.',
        'It helps your whole team stay aligned on the same AI coding standards.'
      ],
      visualDiagramType: 'comparison'
    },
    {
      id: 'step-6-realworld-examples',
      stepNumber: 6,
      title: 'Real-World Coding Patterns (Bug Fixes, New Features, Refactoring)',
      badge: 'Practical Playbook',
      summary: 'Learn real-world scenarios for prompting Claude Code effectively so it can handle real development work with confidence.',
      detailedExplanation: [
        '1. Fixing bugs: Give a natural-language instruction like "Fix the bug where clicking the button in App.tsx does nothing," and Claude explores the files, finds the cause, and fixes the code automatically.',
        '2. Adding a new feature: Ask for something like "Add a dark mode toggle button with state persistence," and it writes the related files and wires them into your existing code in one pass.',
        '3. Writing commit messages: After finishing work, run `/compact` or ask for a git commit, and it analyzes the current diff to generate a clean, well-written commit message.'
      ],
      codeSnippets: [
        {
          language: 'bash',
          filename: 'Claude Code Terminal Prompt Examples',
          code: `# Example 1: Reporting a bug in natural language
claude "Fix the bug in src/components/Header.tsx where the mobile menu drawer doesn't close when clicked"

# Example 2: Requesting a feature
claude "Add an AdBanner component to App.tsx for showing Google AdSense ads, and wire it up"

# Example 3: Checking cost and token usage
/cost`,
          description: 'Prompt patterns you can use directly in real work'
        }
      ],
      keyTakeaways: [
        'The more specific you are about file names and requirements, the more accurate the result.',
        'Review the code changes (diff) Claude proposes and approve them with Y/N in the terminal.',
        'Changes appear immediately in VS Code, so you can test them right away.'
      ]
    }
  ]
};

export const SHORTCUTS_DATA: Record<Lang, ShortcutItem[]> = {
  ko: [
    {
      key: 'Ctrl + ` (Cmd + `)',
      action: 'VS Code 내장 터미널 열기/닫기',
      description: 'Claude Code를 실행할 터미널 창을 빠르게 엽니다.',
      category: 'VS Code'
    },
    {
      key: 'Ctrl + Shift + 5',
      action: '터미널 패널 분할',
      description: '좌측은 개발 서버(npm run dev), 우측은 Claude Code용으로 분할합니다.',
      category: 'VS Code'
    },
    {
      key: 'claude',
      action: 'Claude Code CLI 시작',
      description: '현재 프로젝트 디렉토리 기반으로 AI 세션을 시작합니다.',
      category: 'Claude Code Terminal'
    },
    {
      key: 'claude "요청사항"',
      action: '원샷(One-shot) 프롬프트 즉시 실행',
      description: '대화형 세션 진입 없이 바로 명령 하나를 처리하고 종료합니다.',
      category: 'Claude Code Terminal'
    },
    {
      key: '/init',
      action: 'CLAUDE.md 가이드 파일 자동 생성',
      description: '프로젝트를 분석하여 AI용 지침서를 자동으로 작성합니다.',
      category: 'Claude Code Terminal'
    },
    {
      key: '/cost',
      action: '현재 세션 토큰 & 비용 확인',
      description: '사용된 Anthropic API 비용 및 토큰 소모량을 조회합니다.',
      category: 'Claude Code Terminal'
    },
    {
      key: '/compact',
      action: '대화 맥락 압축 (Context Cleanup)',
      description: '대화가 길어져 토큰 소비가 과도해질 때 대화 이력을 요약 정돈합니다.',
      category: 'Claude Code Terminal'
    },
    {
      key: '/bug',
      action: '버그 리포트 전송',
      description: 'Anthropic 팀에 Claude Code 사용 중 오류를 보고합니다.',
      category: 'Claude Code Terminal'
    },
    {
      key: 'Esc',
      action: 'Claude Code 진행 중단',
      description: 'AI가 코드 분석 중이거나 응답 생성 중일 때 작업을 즉시 중단합니다.',
      category: 'Claude Code Terminal'
    }
  ],
  en: [
    {
      key: 'Ctrl + ` (Cmd + `)',
      action: 'Open/close the VS Code integrated terminal',
      description: 'Quickly open the terminal window where you\'ll run Claude Code.',
      category: 'VS Code'
    },
    {
      key: 'Ctrl + Shift + 5',
      action: 'Split the terminal panel',
      description: 'Split it so the dev server (npm run dev) runs on the left and Claude Code runs on the right.',
      category: 'VS Code'
    },
    {
      key: 'claude',
      action: 'Start the Claude Code CLI',
      description: 'Starts an AI session based on the current project directory.',
      category: 'Claude Code Terminal'
    },
    {
      key: 'claude "your request"',
      action: 'Run a one-shot prompt immediately',
      description: 'Handles a single command and exits without entering an interactive session.',
      category: 'Claude Code Terminal'
    },
    {
      key: '/init',
      action: 'Auto-generate the CLAUDE.md guide file',
      description: 'Analyzes your project and writes an AI instruction file automatically.',
      category: 'Claude Code Terminal'
    },
    {
      key: '/cost',
      action: 'Check tokens & cost for the current session',
      description: 'Shows how much Anthropic API cost and token usage you\'ve consumed.',
      category: 'Claude Code Terminal'
    },
    {
      key: '/compact',
      action: 'Compact the conversation context (Context Cleanup)',
      description: 'Summarizes and tidies up the conversation history when token usage gets too high.',
      category: 'Claude Code Terminal'
    },
    {
      key: '/bug',
      action: 'Send a bug report',
      description: 'Reports an issue you hit while using Claude Code to the Anthropic team.',
      category: 'Claude Code Terminal'
    },
    {
      key: 'Esc',
      action: 'Stop Claude Code',
      description: 'Immediately stops the AI while it\'s analyzing code or generating a response.',
      category: 'Claude Code Terminal'
    }
  ]
};

export const FAQ_DATA: Record<Lang, FAQItem[]> = {
  ko: [
    {
      id: 'faq-1',
      question: 'Claude Code 사용 시 비용은 얼마나 드나요?',
      answer: 'Claude Code는 Anthropic의 Claude 3.5 Sonnet / Claude 3 Opus 모델 API를 사용합니다. 사용한 토큰 양(입력/출력)에 따라 API 비용이 청구되며, Claude Pro / Team 구독 플랜 사용자에게도 일정 사용량이 제공됩니다. 터미널에서 `/cost` 명령어로 현재 세션 비용을 상시 확인할 수 있습니다.',
      category: 'billing'
    },
    {
      id: 'faq-2',
      question: 'VS Code 확장 프로그램과 터미널 CLI 중 어느 것이 더 좋은가요?',
      answer: 'VS Code 확장 프로그램(GUI)은 대화창 위주로 편리하지만 파일 직접 수정에는 제한이 있을 수 있습니다. 반면 터미널 CLI 방식(Claude Code)은 파일 시스템 변경, git 통합, 명령어 실행 등 에이전트 성능이 월등히 뛰어나므로, 본 가이드에서는 VS Code 내장 터미널에 Claude Code CLI를 조합하는 방식을 강력히 추천합니다.',
      category: 'vscode'
    },
    {
      id: 'faq-3',
      question: 'Claude가 잘못된 코드를 수정했을 때 되돌리는 방법은 무엇인가요?',
      answer: 'VS Code의 Git 소스 제어(Source Control) 탭에서 변경된 파일의 Diff를 확인하고 개별 취소할 수 있습니다. 또한 Claude Code 실행 전 git commit을 해두면 `git restore .` 명령어로 안전하게 언제든 이전 상태로 원복이 가능합니다.',
      category: 'claude-code'
    },
    {
      id: 'faq-4',
      question: '구글 애드센스 심사를 통과하기 위해 이 사이트에서 적용된 핵심 요소는 무엇인가요?',
      answer: '구글 애드센스 심사 통과를 위해 1) 충분한 양의 독창적이고 명확한 고품질 기술 콘텐츠, 2) 개인정보처리방침, 이용약관, 사이트 소개, 문의하기 등 필수 법적 페이지 탑재, 3) 반응형 레이아웃 및 우수한 사용자 탐색 편의성(목차, 검색, 다크모드), 4) 명확한 쿠키/DART 광고 고지를 완벽하게 구축하였습니다.',
      category: 'adsense'
    },
    {
      id: 'faq-5',
      question: 'CLAUDE.md 파일은 꼭 만들어야 하나요?',
      answer: '필수는 아니지만 강력히 권장됩니다! CLAUDE.md 파일이 없으면 Claude가 매번 프로젝트 구성이나 패키지 매니저(npm/yarn/pnpm)를 추측해야 하므로 불필요한 토큰이 소비되고 오류 확률이 높아집니다. `/init`으로 5초만에 만들 수 있습니다.',
      category: 'setup'
    }
  ],
  en: [
    {
      id: 'faq-1',
      question: 'How much does it cost to use Claude Code?',
      answer: 'Claude Code uses Anthropic\'s Claude 3.5 Sonnet / Claude 3 Opus model APIs. You\'re billed based on the number of tokens used (input/output), and Claude Pro/Team subscribers also get an allotted amount of usage. You can check your current session\'s cost anytime with the `/cost` command in the terminal.',
      category: 'billing'
    },
    {
      id: 'faq-2',
      question: 'Which is better: the VS Code extension or the terminal CLI?',
      answer: 'The VS Code extension (GUI) is convenient and chat-focused, but it can be limited when it comes to directly editing files. The terminal CLI (Claude Code), on the other hand, is far more capable as an agent — file system changes, git integration, running commands, and more — so this guide strongly recommends pairing the Claude Code CLI with VS Code\'s integrated terminal.',
      category: 'vscode'
    },
    {
      id: 'faq-3',
      question: 'How do I undo it when Claude edits code incorrectly?',
      answer: 'You can review the diff of any changed file in VS Code\'s Git Source Control tab and revert it individually. It also helps to commit with git before running Claude Code — that way you can safely roll back to the previous state anytime with `git restore .`.',
      category: 'claude-code'
    },
    {
      id: 'faq-4',
      question: 'What are the key elements this site uses to pass Google AdSense review?',
      answer: 'To pass Google AdSense review, this site provides: 1) a sufficient amount of original, clearly written, high-quality technical content, 2) the required legal pages — Privacy Policy, Terms of Service, About Us, and a Contact page, 3) a responsive layout with excellent navigation (table of contents, search, dark mode), and 4) clear cookie/DART advertising disclosures.',
      category: 'adsense'
    },
    {
      id: 'faq-5',
      question: 'Do I really need to create a CLAUDE.md file?',
      answer: 'It\'s not required, but it\'s highly recommended! Without a CLAUDE.md file, Claude has to guess your project setup and package manager (npm/yarn/pnpm) every time, which wastes tokens and increases the chance of errors. You can create one in 5 seconds with `/init`.',
      category: 'setup'
    }
  ]
};
