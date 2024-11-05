export interface Prospect {
  name: string;
  linkedinUrl: string;
  title: string;
  company: string;
  email: string;
  workExperience: string;
  socialLinks: string[];
  companyInfo: string;
  notes: string;
}

export interface ICP {
  industryFocus: string;
  painPoints: string[];
  businessSize: string;
  budget: string;
  decisionMaker: string;
}

export interface EmailTemplate {
  subject: string;
  body: string;
}