export type CaseStudyLinkSet = {
  github?: string;
  live?: string;
  linkedin?: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseStudyStackGroup = {
  label: string;
  items: string[];
};

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  sections: CaseStudySection[];
  stack: CaseStudyStackGroup[];
  links?: CaseStudyLinkSet;
  images: CaseStudyImage[];
};

