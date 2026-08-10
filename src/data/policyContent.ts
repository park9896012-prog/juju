import { Lang } from '../i18n';

export interface LegalPageContent {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string[];
    listItems?: string[];
  }[];
}

export const PRIVACY_POLICY: Record<Lang, LegalPageContent> = {
  ko: {
    title: '개인정보처리방침 (Privacy Policy)',
    subtitle: 'VS Code x Claude Code 가이드 웹사이트의 개인정보 보호 정책 및 구글 애드센스 쿠키 안내',
    lastUpdated: '2026년 8월 9일',
    sections: [
      {
        heading: '1. 개인정보의 수집 및 이용 목적',
        content: [
          '본 웹사이트(VS Code x Claude Code 가이드)는 이용자의 개인정보를 최소한으로 수집하며, 이용자의 명시적 동의 없이 목적 외로 개인정보를 활용하지 않습니다.',
          '수집된 개인정보는 웹사이트 서비스 개선, 사용자 문의 답변, 시스템 보안 및 서버 통계 분석 목적에 한하여 사용됩니다.'
        ]
      },
      {
        heading: '2. 쿠키(Cookie) 및 서드파티 제3자 광고(Google AdSense)',
        content: [
          '본 웹사이트는 구글(Google)이 제공하는 웹 분석 및 맞춤형 광고 서비스인 구글 애드센스(Google AdSense)를 이용하고 있습니다.',
          '구글을 포함한 제3자 제공업체는 웹사이트 이용자의 이전 방문 기록을 바탕으로 맞춤형 광고를 제공하기 위해 쿠키(DART 쿠키 포함)를 사용합니다.',
          '이용자는 구글 광고 설정(https://adssettings.google.com)을 방문하여 맞춤형 광고 수신을 거부(Opt-out)할 수 있으며, www.aboutads.info를 방문하여 제3자 제공업체의 쿠키 사용을 중단할 수 있습니다.'
        ],
        listItems: [
          'DART 쿠키를 사용하여 본 사이트 및 인터넷상의 다른 사이트 방문을 기반으로 구글이 사용자에게 맞춤 광고를 게재합니다.',
          '사용자는 쿠키 설정을 통해 모든 쿠키를 거부하거나, 쿠키가 전송될 때 경고를 표시하도록 브라우저를 설정할 수 있습니다.'
        ]
      },
      {
        heading: '3. 정보의 보유 및 파기',
        content: [
          '수집된 정보는 이용 목적이 달성된 후 지체 없이 안전하게 파기됩니다.',
          '법령의 규정에 의하여 보존할 필요가 있는 경우에 한해 관련 법령이 정한 기간 동안 개인정보를 보관합니다.'
        ]
      },
      {
        heading: '4. 이용자의 권리 및 연락처',
        content: [
          '이용자는 언제든지 본인의 개인정보 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다.',
          '개인정보 보호 정책 관련 문의 사항이나 불편 사항은 [문의하기] 페이지 또는 운영자 이메일(support@claude-vscode-guide.com)로 접수해 주시면 신속하게 답변해 드리겠습니다.'
        ]
      }
    ]
  },
  en: {
    title: 'Privacy Policy',
    subtitle: 'Privacy policy and Google AdSense cookie notice for the VS Code x Claude Code Guide website',
    lastUpdated: 'August 9, 2026',
    sections: [
      {
        heading: '1. Purpose of Collecting and Using Personal Information',
        content: [
          'This website (the VS Code x Claude Code Guide) collects the minimum amount of personal information necessary, and never uses it for any purpose beyond what you have explicitly agreed to.',
          'Any personal information collected is used solely to improve our website service, respond to user inquiries, and for system security and server statistics analysis.'
        ]
      },
      {
        heading: '2. Cookies and Third-Party Advertising (Google AdSense)',
        content: [
          'This website uses Google AdSense, a web analytics and personalized advertising service provided by Google.',
          'Google and other third-party vendors use cookies (including the DART cookie) to serve ads based on a user\'s past visits to this and other websites.',
          'You can opt out of personalized advertising by visiting Google Ads Settings (https://adssettings.google.com), and you can opt out of third-party vendor cookies by visiting www.aboutads.info.'
        ],
        listItems: [
          'Google uses the DART cookie to serve ads to users based on their visits to this site and other sites on the internet.',
          'You can configure your browser to refuse all cookies, or to alert you whenever a cookie is being sent, through your cookie settings.'
        ]
      },
      {
        heading: '3. Data Retention and Destruction',
        content: [
          'Collected information is securely destroyed without delay once its purpose has been fulfilled.',
          'Where retention is required by law, personal information is kept only for the period required under the relevant statute.'
        ]
      },
      {
        heading: '4. User Rights and Contact',
        content: [
          'You may request to view, correct, delete, or stop the processing of your personal information at any time.',
          'For any questions or concerns about this privacy policy, please reach us through the [Contact] page or at the operator\'s email (support@claude-vscode-guide.com), and we\'ll respond promptly.'
        ]
      }
    ]
  }
};

export const TERMS_OF_SERVICE: Record<Lang, LegalPageContent> = {
  ko: {
    title: '이용약관 (Terms of Service)',
    subtitle: 'VS Code x Claude Code 가이드 웹사이트 이용 조건 및 사용자 규정',
    lastUpdated: '2026년 8월 9일',
    sections: [
      {
        heading: '1. 목적 및 약관의 적용',
        content: [
          '본 약관은 VS Code x Claude Code 가이드(이하 "회사" 또는 "사이트")가 제공하는 모든 정보 서비스의 이용 조건 및 절차를 규정함을 목적으로 합니다.',
          '본 사이트를 이용함으로써 사용자는 본 이용약관에 동의하는 것으로 간주됩니다.'
        ]
      },
      {
        heading: '2. 저작권 및 콘텐츠 재사용 규정',
        content: [
          '본 사이트에서 제공하는 가이드 문단, 텍스트, 코드 설명, visual diagram 및 튜토리얼은 독자적인 저작물로서 저작권법의 보호를 받습니다.',
          '비상업적 목적으로 본 사이트의 가이드 출처(URL)를 밝히고 일부 인용하는 것은 허용되나, 무단 전재, 복사, 자동 스크래핑 및 상업적 재배포는 엄격히 금지됩니다.'
        ]
      },
      {
        heading: '3. 서비스 변경 및 중단',
        content: [
          '사이트 운영자는 정보의 최신화 및 시스템 유지보수를 위해 고지 없이 서비스 내용을 수정하거나 업데이트할 수 있습니다.'
        ]
      }
    ]
  },
  en: {
    title: 'Terms of Service',
    subtitle: 'Terms and conditions of use for the VS Code x Claude Code Guide website',
    lastUpdated: 'August 9, 2026',
    sections: [
      {
        heading: '1. Purpose and Scope',
        content: [
          'These Terms govern the conditions and procedures for using all information services provided by the VS Code x Claude Code Guide (the "Company" or "Site").',
          'By using this site, you are deemed to agree to these Terms of Service.'
        ]
      },
      {
        heading: '2. Copyright and Content Reuse',
        content: [
          'The guide text, code explanations, visual diagrams, and tutorials provided on this site are original works protected under copyright law.',
          'Quoting a portion of this site\'s guides for non-commercial purposes with proper attribution (URL) is permitted, but unauthorized republication, copying, automated scraping, and commercial redistribution are strictly prohibited.'
        ]
      },
      {
        heading: '3. Changes to and Suspension of the Service',
        content: [
          'The site operator may modify or update the service content without prior notice in order to keep information current and perform system maintenance.'
        ]
      }
    ]
  }
};

export const DISCLAIMER_POLICY: Record<Lang, LegalPageContent> = {
  ko: {
    title: '책임 한계 및 법적 고지 (Disclaimer)',
    subtitle: '가이드 콘텐츠 및 코드 예제 제공에 관한 법적 고지사항',
    lastUpdated: '2026년 8월 9일',
    sections: [
      {
        heading: '1. 정보의 정확성 및 면책',
        content: [
          '본 웹사이트의 모든 튜토리얼, 명령어 예제 및 팁은 개발자의 신속한 학습을 돕기 위해 작성된 정보성 가이드입니다.',
          'Claude Code 및 Visual Studio Code는 Anthropic 및 Microsoft의 등록 상표이며, 본 사이트는 독립적인 기술 정보 블로그입니다.',
          '제공된 코드 스니펫 및 터미널 명령어를 실제 운영 프로젝트에 적용하기 전에 충분한 검증 및 백업을 권장하며, 실행 결과에 따른 어떠한 직간접적 손실에 대해서도 본 사이트는 법적 책임을 지지 않습니다.'
        ]
      },
      {
        heading: '2. 외부 링크에 대한 책임',
        content: [
          '본 웹사이트는 편의를 위해 Anthropic, VS Code, GitHub 등 외부 웹사이트 링크를 포함할 수 있으며, 해당 외부 사이트의 콘텐츠 및 개인정보보호 방침에 대해서는 책임을 지지 않습니다.'
        ]
      }
    ]
  },
  en: {
    title: 'Disclaimer',
    subtitle: 'Legal notice regarding the guide content and code examples provided on this site',
    lastUpdated: 'August 9, 2026',
    sections: [
      {
        heading: '1. Accuracy of Information and Disclaimer',
        content: [
          'All tutorials, command examples, and tips on this website are informational guides written to help developers learn quickly.',
          'Claude Code and Visual Studio Code are registered trademarks of Anthropic and Microsoft, respectively; this site is an independent technical information blog.',
          'We recommend thorough testing and backups before applying any code snippet or terminal command to a production project, and this site accepts no legal liability for any direct or indirect loss arising from their use.'
        ]
      },
      {
        heading: '2. Responsibility for External Links',
        content: [
          'For convenience, this website may include links to external sites such as Anthropic, VS Code, and GitHub, and is not responsible for the content or privacy practices of those external sites.'
        ]
      }
    ]
  }
};

export const ABOUT_US: Record<Lang, LegalPageContent> = {
  ko: {
    title: '사이트 소개 (About Us)',
    subtitle: 'VS Code와 Claude Code CLI 통합 연동 가이드 전문 정보 미디어',
    lastUpdated: '2026년 8월 9일',
    sections: [
      {
        heading: '미션 및 서비스 목적',
        content: [
          'Visual Studio Code x Claude Code 가이드는 AI 기반 에이전틱 코딩 환경을 구축하려는 개발자, 초보 학습자, 소프트웨어 엔지니어를 위해 설립되었습니다.',
          'Anthropic의 혁신적인 AI 터미널 에이전트인 Claude Code를 VS Code와 완벽하게 연결하는 방법을 단계별 이미지, 시뮬레이터 및 상세 설명으로 제공합니다.',
          '단순한 명령어 나열을 넘어 실제 프롬프트 엔지니어링, CLAUDE.md 규칙 설정, 단축키 활용, 단가 절감 팁 등 실무에 즉시 적용 가능한 최고 품질의 개발 지식을 전달합니다.'
        ],
        listItems: [
          '초보자 맞춤형 친절한 단계별 연동 가이드',
          '직관적인 VS Code 인터페이스 시각적 도해',
          '웹 브라우저 상에서 직접 체험 가능한 터미널 시뮬레이터',
          '구글 애드센스 품질 기준에 적합한 깊이 있고 유용한 고품질 정보 제공'
        ]
      }
    ]
  },
  en: {
    title: 'About Us',
    subtitle: 'A dedicated media site for integrating VS Code with the Claude Code CLI',
    lastUpdated: 'August 9, 2026',
    sections: [
      {
        heading: 'Our Mission and Purpose',
        content: [
          'The VS Code x Claude Code Guide was created for developers, beginners, and software engineers looking to build an AI-powered agentic coding workflow.',
          'We provide step-by-step images, simulators, and detailed explanations for perfectly connecting Anthropic\'s groundbreaking AI terminal agent, Claude Code, with VS Code.',
          'Beyond simply listing commands, we deliver high-quality, immediately actionable development knowledge — real prompt engineering, CLAUDE.md rule setup, shortcut usage, and cost-saving tips.'
        ],
        listItems: [
          'Beginner-friendly, step-by-step integration guides',
          'Intuitive visual diagrams of the VS Code interface',
          'An interactive terminal simulator you can try right in your browser',
          'In-depth, high-quality information that meets Google AdSense\'s quality standards'
        ]
      }
    ]
  }
};
