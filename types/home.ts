export type Education = {
  period: string;
  degree: string;
  institution: string;
  duration: string;
  summary: string;
  thesis: {
    label: string;
    title: string;
    summary: string;
  };
  linkedinPostEmbed?: {
    src: string;
    title: string;
  };
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  website?: string;
  summary: string;
  achievements?: string[];
  stack: string[];
};

export type ProjectItem = {
  slug: string;
  caseStudy?: boolean;
  title: string;
  description: string;
  logo?: string;
  github?: string;
  website: string;
  accent: string;
  label: string;
  tags: string[];
};

export type HomeContent = {
  education: Education;
  experience: ExperienceItem[];
  projects: ProjectItem[];
};
