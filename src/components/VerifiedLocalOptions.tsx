import type { LocalProvider } from "@/lib/local-provider-directory";
import { providerRelFor } from "@/lib/local-provider-directory";

type VerifiedLocalOptionsProps = {
  providers: LocalProvider[];
  showNotice: boolean;
};

const providerChecklist = [
  "Confirm services, prices, opening hours, and availability directly before visiting or booking.",
  "Ask how the provider handles vaccination records, behaviour concerns, illness, emergencies, and cancellation.",
  "Check whether the provider is realistic for your dog's size, age, temperament, health needs, and transport plan.",
  "Keep your vet details, emergency contact, microchip or ID details, and written care notes ready.",
];

export function VerifiedLocalOptions({ providers, showNotice }: VerifiedLocalOptionsProps) {
  if (!showNotice) return null;

  return (
    <section className="mt-6 rounded-xl border border-oat bg-white p-5 shadow-panel">
      <h2 className="text-2xl font-black text-cocoa">Verified local options to start with</h2>
      <p className="mt-3 text-sm font-semibold leading-6 text-bark">
        These options are starting points for your own checks, not rankings or endorsements.
        Details can change, so confirm services, prices, availability, rules, and emergency
        arrangements directly before visiting or booking.
      </p>

      {providers.length > 0 ? (
        <>
          {providers.length < 4 ? (
            <div className="mt-4 rounded-xl border border-honey/45 bg-honey/10 p-5">
              <p className="text-base font-black text-cocoa">Verified starting shortlist</p>
              <p className="mt-2 text-sm leading-6 text-bark">
                Dog Haven deliberately lists only options it could verify from an identifiable
                public or official source. Confirm details directly before booking.
              </p>
            </div>
          ) : null}

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {providers.map((provider) => (
              <article key={`${provider.city}-${provider.name}`} className="rounded-xl border border-oat bg-cream p-5 shadow-panel">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black leading-tight text-cocoa">{provider.name}</h3>
                    <p className="mt-1 text-sm font-bold text-bark">{provider.areaServed ?? provider.city}</p>
                  </div>
                  <span className="rounded-full border border-sage/25 bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-cocoa">
                    {provider.verificationStatus === "verified-direct" ? "Direct source" : "Verified source"}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-bark">{provider.notes}</p>

                <dl className="mt-4 grid gap-2 text-sm leading-6 text-bark">
                  <div>
                    <dt className="font-black">Service type</dt>
                    <dd>{provider.serviceTypes.map((type) => type.replaceAll("-", " ")).join(", ")}</dd>
                  </div>
                  {provider.phone ? (
                    <div>
                      <dt className="font-black">Phone</dt>
                      <dd>{provider.phone}</dd>
                    </div>
                  ) : null}
                  {provider.email ? (
                    <div>
                      <dt className="font-black">Email</dt>
                      <dd>
                        <a className="font-bold underline decoration-sage/40 underline-offset-4" href={`mailto:${provider.email}`}>
                          {provider.email}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                  {provider.address ? (
                    <div>
                      <dt className="font-black">Address</dt>
                      <dd>{provider.address}</dd>
                    </div>
                  ) : null}
                </dl>

                <div className="mt-5 flex flex-wrap gap-3 text-sm font-black">
                  {provider.website ? (
                    <a
                      href={provider.website}
                      rel={providerRelFor(provider.linkType)}
                      className="rounded-full bg-honey px-4 py-2 text-cocoa transition hover:bg-sage"
                    >
                      Website
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-4 rounded-xl border border-honey/45 bg-honey/10 p-5">
          <p className="text-base font-black text-cocoa">No verified provider shortlist is published</p>
          <p className="mt-2 text-sm leading-6 text-bark">
            Use the provider-checking checklist below and confirm services directly. Dog Haven
            does not publish a provider until it can be checked against an identifiable public or
            official source.
          </p>
        </div>
      )}

      <div className="mt-4">
        <h3 className="text-lg font-black text-cocoa">Provider-checking checklist</h3>
        <ul className="mt-3 grid gap-3">
          {providerChecklist.map((item) => (
            <li key={item} className="rounded-xl bg-cream px-4 py-3 text-sm font-semibold leading-6 text-cocoa">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
