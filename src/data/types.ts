export interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
}

export interface JourneyItem {
  role: string;
  period: string;
  company: string;
  summary: string;
}

export interface Achievement {
  value: string;
  detail: string;
  iconClass: string;
}

export interface ExperienceProduct {
  name: string;
  url: string;
}

export interface ExperienceItem {
  icon: string;
  iconClass: string;
  role: string;
  company: string;
  companyClass: string;
  badge?: string;
  period: string;
  summaryLine: string;
  skills: string[];
  challenge: string | string[];
  actions: string[];
  result: string | string[];
  product?: ExperienceProduct;
}

export interface EducationHistoryItem {
  period: string;
  detail: string;
}

export interface SkillGroupItem {
  name: string;
  level: string;
  width: number;
  primary?: boolean;
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: SkillGroupItem[];
}

export interface ToolBadge {
  icon: string;
  name: string;
}

export interface Certification {
  yearMonth: string;
  name: string;
}

export interface SideWorkItem {
  period: string;
  org: string;
  role: string;
  summary: string;
}

export interface MindsetCard {
  icon: string;
  title: string;
  description: string;
}

export interface SkillDetailItem {
  name: string;
  percentage: number;
  description: string;
  // Dynamic color classes for styling
  colorClass: {
    bg: string;     // for progress bar background e.g. "bg-primary"
    badgeBg: string; // for badge background e.g. "bg-blue-50"
    badgeText: string; // for badge text e.g. "text-blue-600"
  };
}

export interface SkillDetailCategory {
  id: string; // "business", "ux", "tech"
  name: string; // "Business", "UX", "Tech"
  items: SkillDetailItem[];
}
