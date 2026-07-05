import Link from "next/link";
import type { LucideIcon } from "lucide-react";

const accentClasses = {
  rose: "bg-rose text-navy",
  sage: "bg-sage text-cream",
  honey: "bg-honey text-navy",
  sky: "bg-sky text-navy",
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: keyof typeof accentClasses;
  href?: string;
};

export function FeatureCard({ title, description, icon: Icon, accent, href }: FeatureCardProps) {
  const content = (
    <article className="group flex h-full min-h-[172px] flex-col rounded-xl border border-oat/80 bg-white/88 p-5 shadow-panel transition hover:border-gold/45 hover:bg-white hover:shadow-soft">
      <div className={`mb-4 flex h-11 w-11 flex-none items-center justify-center rounded-xl ${accentClasses[accent]}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black leading-snug text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-bark">{description}</p>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
