import { homeContent } from "@/content/home";
import type { HomeContent } from "@/types/home";

export async function getHomeContent(): Promise<HomeContent> {
  return homeContent;
}

