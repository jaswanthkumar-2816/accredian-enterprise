export interface MetricItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  subtext: string;
  icon: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logoText: string;
  category: string;
  badge?: string;
}

export interface EnterpriseEdgeItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  stepNumber: string;
  metrics: string;
}

export interface CatStage {
  id: "concept" | "application" | "tools";
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverables: string[];
  toolsList: string[];
  metrics: string;
}

export interface DomainItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  learners: string;
  programsCount: number;
  keySkills: string[];
}

export interface CourseItem {
  id: string;
  title: string;
  category: "program" | "industry" | "topic" | "level";
  categoryLabel: string;
  subtitle: string;
  description: string;
  duration: string;
  mode: string;
  badge: string;
  targetAudience: string;
  highlights: string[];
  syllabus: { title: string; duration: string; topics: string[] }[];
}

export interface TrainingProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  keyOutputs: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  category: string;
  impactMetric: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Curricula" | "Enterprise Setup" | "Security & ROI";
}

export interface LeadFormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  numberOfEmployees: string;
  trainingRequirement: string;
}
