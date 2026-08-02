import { AppScreenInfo, FeatureItem, TrustItem, StepItem, FAQItem } from '../types';

export const APP_SCREENS: AppScreenInfo[] = [
  {
    id: 'target-scoring',
    title: 'Interactive Target Plotting',
    subtitle: 'FITA & World Archery Compliant',
    tagline: 'Plot arrow impact coordinates with millimetric precision directly on digital target faces.',
    badge: 'Precision Mode',
    description: 'Tap directly on the virtual 122cm, 80cm, or 6-ring target face. Calculates line breaks and group centers automatically.'
  },
  {
    id: 'keypad-scoring',
    title: 'Rapid Color Keypad',
    subtitle: 'Color-Coded Touch Scoring',
    tagline: 'Record ends in seconds with an intuitive tactile keypad matching standard target ring colors.',
    badge: 'Speed Scoring',
    description: 'Yellow for Gold (X, 10, 9), Red for (8, 7), Blue for (6, 5), Black (4, 3), White (2, 1) and Miss (M) with quick undo and edit controls.'
  },
  {
    id: 'scorecard',
    title: 'Digital Scorecard',
    subtitle: 'Instant End-by-End Matrix',
    tagline: 'Ditch paper notes. View full end breakdowns, total scores, running cumulative totals, and averages.',
    badge: 'Paperless Record',
    description: 'Organized 6-arrow grid with instant row totals, end-by-end calculations, average per arrow, and average per end.'
  },
  {
    id: 'statistics',
    title: 'Hit Zone Analytics',
    subtitle: 'Group Dispersion Metrics',
    tagline: 'Analyze your shot distribution across gold, red, blue, black, and white target zones with visual charts.',
    badge: 'Real-time Stats',
    description: 'Comprehensive breakdown showing percentage of arrows in X/10/9 Gold zones, average scores per end, and total logged points.'
  },
  {
    id: 'round-config',
    title: 'Custom Target Geometry',
    subtitle: 'FITA 122cm, 80cm & Compound',
    tagline: 'Configure practice rounds with custom target face sizes, number of ends, arrows per end, and multi-archer selection.',
    badge: 'Flexible Preset',
    description: 'Choose 10-Ring Standard 122cm, Standard 80cm, or Compound 80cm 6-Ring faces. Customize 1 to 12 ends with up to 6 arrows per end.'
  },
  {
    id: 'sessions',
    title: 'Session History & Sync',
    subtitle: 'Google Drive & Cloud Sync',
    tagline: 'Save practice rounds locally or backup seamlessly to Google Drive and Firebase Console.',
    badge: 'Offline First',
    description: 'Review recent shooting sessions, filter by date or round type, and sync scores across all your devices securely.'
  },
  {
    id: 'timer',
    title: 'Scorify Sport Timer',
    subtitle: 'Official Competition Sequence',
    tagline: 'Integrated acoustic preparation and shooting timers for solo practice or tournament simulations.',
    badge: 'Archery Timer',
    description: 'Features 10s preparation countdowns, 80s/120s shooting windows, audio cues, and configurable end sequences.'
  },
  {
    id: 'news-feed',
    title: 'World Archery Feed',
    subtitle: 'Live RSS Tournament Updates',
    tagline: 'Stay up to date with international archery news, tournament reports, and official rule updates.',
    badge: 'Live Feed',
    description: 'Directly synchronized RSS feed bringing latest World Archery articles, recurve & compound tournament highlights to your phone.'
  }
];

export const TRUST_ITEMS: TrustItem[] = [
  {
    icon: 'Trophy',
    title: 'Olympic & World Archery Standard',
    subtitle: '70m & 50m Precision Plotting',
    description: 'Engineered to record sub-millimeter group centers for competitive recurve, compound, and barebow athletes preparing for tournaments.',
    highlight: 'FITA & World Archery Compliant'
  },
  {
    icon: 'Zap',
    title: 'Instant Touch Keypad',
    subtitle: 'Color-Coded Ring Matrix',
    description: 'Record ends in seconds with tactile touch buttons matching official Gold, Red, Blue, Black, and White target ring colors.',
    highlight: 'Speed & Accuracy'
  },
  {
    icon: 'Timer',
    title: 'Integrated Sport Timer',
    subtitle: 'Acoustic Tournament Sequence',
    description: 'Features 10s preparation countdowns, 80s/120s shooting windows, and clear sound cues for practice and league matches.',
    highlight: 'Official Sound Cues'
  },
  {
    icon: 'Smartphone',
    title: 'Offline-First Engine',
    subtitle: '100% Range Capability',
    description: 'Score anywhere on remote outdoor ranges with zero cellular reception. All practice sessions are saved locally and synced safely.',
    highlight: 'Works Without Internet'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'target',
    iconName: 'Target',
    title: 'Interactive Digital Target',
    description: 'Tap directly on virtual target faces (122cm, 80cm, Compound 6-ring) with pinch-to-zoom and precision arrow coordinate placement.',
    badge: 'Tap-to-Score',
    screenTarget: 'target-scoring'
  },
  {
    id: 'stats',
    iconName: 'BarChart3',
    title: 'Live Statistics & Grouping',
    description: 'Track average per end, average per arrow, total points, and color-coded Hit Zone Distributions (Gold, Red, Blue, Black, White).',
    badge: 'Real-time Charts',
    screenTarget: 'statistics'
  },
  {
    id: 'scorecard',
    iconName: 'FileSpreadsheet',
    title: 'Digital Scorecards',
    description: 'Paperless grid layout displaying ends E1–E12, individual arrow scores (X, 10..1), end totals, and cumulative round scores.',
    badge: 'Automatic Math',
    screenTarget: 'scorecard'
  },
  {
    id: 'analytics',
    iconName: 'TrendingUp',
    title: 'Performance Analytics',
    description: 'Historical trend graphs show scoring progression over weeks and months, highlighting consistency and sight adjustment insights.',
    badge: 'Progress Insights',
    screenTarget: 'sessions'
  },
  {
    id: 'scoring-speed',
    iconName: 'Zap',
    title: 'Fast & Accurate Keypad',
    description: 'Optimized touch keypad with standard archery ring colors for lightning-fast scoring with zero lag during rapid ends.',
    badge: 'Minimal Taps',
    screenTarget: 'keypad-scoring'
  },
  {
    id: 'interface',
    iconName: 'Smartphone',
    title: 'Beautiful Dark Interface',
    description: 'High-contrast dark mode tailored specifically for outdoor daylight readability and indoor range lighting without battery drain.',
    badge: 'OLED Dark Mode',
    screenTarget: 'round-config'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Download & Install APK',
    description: 'Download the lightweight Scorify APK directly to your Android device or install through our instant release link.',
    detail: 'No play store account needed • Takes less than 15 seconds',
    icon: 'Download'
  },
  {
    number: '02',
    title: 'Create Your Practice Session',
    description: 'Select your target face geometry (122cm, 80cm, or 6-Ring), set number of ends and arrows per end, or choose a FITA preset.',
    detail: 'Supports Recurve, Compound, Barebow & Traditional',
    icon: 'Settings2'
  },
  {
    number: '03',
    title: 'Score Arrows in Real Time',
    description: 'Tap directly on the target face or use the color-coded rapid keypad to input arrow values end by end.',
    detail: 'Automatic line break assistant & instant score totals',
    icon: 'Target'
  },
  {
    number: '04',
    title: 'Track Progress & Cloud Sync',
    description: 'View instant hit-zone analytics, group patterns, and sync session logs safely to Google Drive for permanent backup.',
    detail: 'Export reports or share scorecards with your coach',
    icon: 'CloudCheck'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'free',
    question: 'Is the Scorify app completely free to use?',
    answer: 'Yes! Scorify is 100% free with full access to target scoring, digital scorecards, live statistics, sport timer, and session history without forced ads or hidden subscription walls.'
  },
  {
    id: 'offline',
    question: 'Can I use Scorify offline at remote outdoor ranges?',
    answer: 'Absolutely. Scorify is built with an offline-first architecture. All your practice rounds, scorecards, and statistics are recorded locally on your device without requiring an active cellular or Wi-Fi connection. When you regain internet access, your scores automatically sync with Google Drive if enabled.'
  },
  {
    id: 'fita',
    question: 'Does Scorify support World Archery (FITA) and NFAA scoring rules?',
    answer: 'Yes! Scorify includes official FITA 122cm (70m/50m), 80cm (50m/30m), Compound 80cm (6-Ring center gold), 60cm indoor, and custom field/3D target face geometries. It handles inner-ten (X) counting and customizable end structures.'
  },
  {
    id: 'apk-install',
    question: 'How do I install the Scorify APK on my Android phone?',
    answer: 'Click the "Download APK" button on this website to save `scorify.apk`. Open your downloaded file, tap "Install", and if prompted, enable "Allow installation from unknown sources" in your browser settings. The app installs in under 10 seconds!'
  },
  {
    id: 'beginners',
    question: 'Is Scorify suitable for beginners as well as professional archers?',
    answer: 'Definitely! Scorify was designed with a dual interface: an intuitive rapid keypad for beginners who want fast, simple numerical logging, and a millimeter target plotting view for Olympic and competitive archers analyzing shot dispersion.'
  }
];

export const WHY_CHECKLIST = [
  { title: 'Easy to Use', desc: 'Large tactile buttons designed for gloved archers and sun glare.' },
  { title: 'Lightweight APK', desc: 'Under 12MB install size with instant startup and zero background lag.' },
  { title: '100% Accurate Math', desc: 'Automatic cumulative math, end averages, and X-count tallying.' },
  { title: 'Beautiful Dark UI', desc: 'Sleek OLED dark theme optimized for high-contrast visibility.' },
  { title: 'Offline Support', desc: 'Score anywhere on the range without cell service or internet.' },
  { title: 'Fast Performance', desc: 'Smooth 60fps interaction with instant touch feedback.' }
];
