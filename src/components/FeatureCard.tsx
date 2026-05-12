import type { LucideIcon } from "lucide-react";

const accentClasses = {
  rose: "bg-rose text-cocoa",
  sage: "bg-sage text-cream",
  honey: "bg-honey text-cocoa",
  sky: "bg-sky text-cocoa",
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: keyof typeof accentClasses;
};

export function FeatureCard({ title, description, icon: Icon, accent }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-oat bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${accentClasses[accent]}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black text-cocoa">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-bark">{description}</p>
    </article>
  );
}
