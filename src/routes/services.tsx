import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SERVICES, whatsappLink } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Websites, SEO, Ads & Branding | Uraan Digital" },
      {
        name: "description",
        content:
          "Website development, SEO, social media, Meta & Google Ads, branding, content, AI automation aur e-commerce solutions for Pakistani businesses.",
      },
      { property: "og:title", content: "Services — Uraan Digital" },
      {
        property: "og:description",
        content: "Nau services jo aapke business ko online grow karti hain.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Nau services, ek hi maqsad — growth"
        description="Har service alag se bhi li ja sakti hai, ya ek monthly package ke andar combine ho sakti hai."
      />

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 50} className="h-full">
                <article
                  id={service.slug}
                  className="flex h-full scroll-mt-24 flex-col rounded-[24px] bg-cream p-7 ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <div
                    className={`grid size-11 place-items-center rounded-2xl ${
                      i % 2 === 0 ? "bg-sage/20 text-sagedeep" : "bg-clay/15 text-claydark"
                    }`}
                  >
                    <span className="font-display text-lg font-semibold">{service.initial}</span>
                  </div>
                  <h2 className="mt-5 font-body text-lg font-semibold text-ink">{service.title}</h2>
                  <p className="mt-2 font-body text-sm text-pretty text-inksoft">{service.detail}</p>
                  <ul className="mt-5 flex-1 space-y-2 font-body text-sm text-inksoft">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-sagedeep">✓</span> {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(
                      `Assalam o Alaikum, mujhe ${service.title} ke bare mein maloomat chahiye.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-cream px-5 py-2.5 font-body text-sm font-medium text-ink ring-1 ring-sandline transition-colors hover:bg-sand"
                  >
                    Is service par baat karein
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 text-center">
              <Link
                to="/pricing"
                className="inline-flex items-center rounded-full bg-clay px-6 py-3 font-body text-sm font-medium text-cream ring-1 ring-clay transition-opacity hover:opacity-90"
              >
                Packages aur pricing dekhein
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Confused ke kaunsi service chahiye?"
        description="Ek free 20-minute call par hum aapke business ke liye sahi channels tajweez karenge."
      />
    </>
  );
}
