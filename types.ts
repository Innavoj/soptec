
export interface ServiceItem {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
}
