import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { lawsHub } from "@/lib/phase13-guides";
import { phase22LawsCards } from "@/lib/phase22-sterilisation-guides";
import { createMetadata } from "@/lib/seo";

const hub = {
  ...lawsHub,
  related: [...lawsHub.related, ...phase22LawsCards],
};

export const metadata: Metadata = createMetadata({
  title: "Dog Laws South Africa | Owner Rules & Responsibilities",
  description: "Plain-English dog laws and rules for South Africa: rabies vaccination duties, complexes and rentals, barking complaints, leads, beach access, and responsible ownership checks.",
  path: hub.path,
});

export default function LawsPage() {
  return <HubPage hub={hub} />;
}
