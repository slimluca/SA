import type { Metadata } from "next";
import Link from "next/link";
import { HubPage } from "@/components/HubPage";
import { toolsHub, tools } from "@/lib/tools-data";
import { createMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Free Dog Tools South Africa | Calculators, Quizzes & Checklists | Dog Haven",
  description: "Free interactive tools for South African dog owners: feeding calculator, cost estimator, food safety lookup, breed quiz, age calculator, and printable checklists. No login required.",
  path: "/tools",
});

const featured = [
  {
    title: "Can My Dog Eat This?",
    description: "Quick safety check for common foods (chocolate, grapes, biltong, and more).",
    href: "/tools/can-my-dog-eat-this",
  },
  {
    title: "Dog Feeding Calculator",
    description: "Estimate daily food by weight, age, activity, and food type.",
    href: "/tools/dog-feeding-calculator",
  },
  {
    title: "Dog Cost Calculator",
    description: "Plan a realistic monthly budget for South African dog ownership.",
    href: "/tools/dog-cost-calculator",
  },
  {
    title: "Dog Breed Match Quiz",
    description: "Answer a few questions and get responsible breed categories to research.",
    href: "/tools/dog-breed-match-quiz",
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="bg-emerald-deep text-white">
        <div className="section-shell py-12 sm:py-16">
          <p className="light-kicker">Free tools</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Interactive tools for South African dog owners</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/85">
            Calculators, quizzes, and checklists that help you plan, check, and decide — without leaving the site or sharing personal information.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-2xl border border-white/20 bg-white/10 p-5 transition hover:bg-white/20"
              >
                <h2 className="text-lg font-black">{tool.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/80">{tool.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#f3c76d]">
                  Try it <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <HubPage hub={toolsHub} />
    </>
  );
}
