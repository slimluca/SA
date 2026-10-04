import type { GuideContent } from "@/lib/content";

export function resolveGuideForHub(
  hubPath: string,
  ...candidates: Array<GuideContent | undefined>
) {
  return candidates.find((guide) => guide?.hubPath === hubPath);
}
