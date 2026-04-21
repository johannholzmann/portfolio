import type { CaseStudy } from "@/types/case-study";
import { hoteleriaHospitalaria } from "@/content/projects/hoteleria-hospitalaria";
import { quecompramos } from "@/content/projects/quecompramos";

export const caseStudies = {
  "hoteleria-hospitalaria": hoteleriaHospitalaria,
  quecompramos,
} as const;

export type CaseStudySlug = keyof typeof caseStudies;

export function getCaseStudy(slug: string): CaseStudy | null {
  return (caseStudies as Record<string, CaseStudy>)[slug] ?? null;
}

