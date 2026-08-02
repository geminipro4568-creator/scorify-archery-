export type ScreenId = 
  | 'target-scoring'
  | 'keypad-scoring'
  | 'scorecard'
  | 'statistics'
  | 'round-config'
  | 'sessions'
  | 'timer'
  | 'news-feed';

export interface AppScreenInfo {
  id: ScreenId;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
  screenTarget?: ScreenId;
}

export interface TrustItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
