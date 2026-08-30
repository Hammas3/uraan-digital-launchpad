import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  FAQS,
  PRICING,
  PROJECTS,
  SERVICES,
  STATS,
  TESTIMONIALS,
  whatsappLink,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uraan Digital — Aapke Business Ki Digital Uraan" },
      {
        name: "description",
        content:
          "Pakistan ki digital marketing agency: websites, SEO, social media, Meta & Google Ads, branding aur e-commerce solutions.",
      },
      { property: "og:title", content: "Uraan Digital — Aapke Business Ki Digital Uraan" },
      {
        property: "og:description",
        content:
          "Businesses ko online grow karne, customers attract karne aur strong digital brands build karne mein madad.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_-5%,color-mix(in_oklab,var(--sage)_28%,transparent),transparent_70%)]" />
        <div className="hairlines absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="mx-auto max-w-[42ch] text-center">
            <span className="anim-rise inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 font-body text-xs font-medium tracking-wide text-sagedeep ring-1 ring-sandline">
              Aapke Business Ki Digital Uraan
            </span>
            <h1 className="anim-rise mt-7 font-display text-5xl font-medium leading-[1.05] text-balance text-ink md:text-6xl">
              Apne Business Ko <span className="text-clay">Digital Uraan</span> Dein 🚀
            </h1>
            <p className="anim-rise mt-6 font-body text-base text-pretty text-inksoft md:text-lg">
              Uraan Digital businesses ko online grow karne, customers attract karne aur strong
              digital brands build karne mein help karta hai.
            </p>
            <div className="anim-rise mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-clay px-6 py-3 font-body text-sm font-medium text-cream shadow-[0_18px_40px_-20px_var(--clay)] ring-1 ring-clay transition-opacity hover:opacity-90"
              >
                Free Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full bg-cream px-6 py-3 font-body text-sm font-medium text-ink ring-1 ring-sandline transition-colors hover:bg-sand"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* STATS */}
          <div className="anim-rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-sandline ring-1 ring-sandline md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-cream px-6 py-8 text-center">
                <div className="font-display text-4xl font-medium text-ink">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 font-body text-xs uppercase tracking-[0.18em] text-inksoft">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <div className="max-w-[48ch]">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Services
              </span>
              <h2 className="mt-4 font-display text-4xl font-medium text-balance text-ink md:text-5xl">
                Har cheez jo aapke brand ko aage bulati hai
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 50}>
                <Link
                  to="/services"
                  hash={service.slug}
                  className="group block h-full rounded-[24px] bg-cream p-7 ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <div
                    className={`grid size-11 place-items-center rounded-2xl ${
                      i % 2 === 0 ? "bg-sage/20 text-sagedeep" : "bg-clay/15 text-claydark"
                    }`}
                  >
                    <span className="font-display text-lg font-semibold">{service.initial}</span>
                  </div>
                  <h3 className="mt-5 font-body text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 font-body text-sm text-pretty text-inksoft">{service.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[46ch]">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Portfolio
              </span>
              <h2 className="mt-4 font-display text-4xl font-medium text-balance text-ink md:text-5xl">
                Pakistan ke brands ki kahaniyan
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="font-body text-sm font-medium text-sagedeep transition-colors hover:text-ink"
            >
              Sab case studies →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: p.slug }}
                  className="group block rounded-[24px] bg-sand p-3 ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category} project by Uraan Digital`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full rounded-[16px] object-cover"
                  />
                  <div className="p-4">
                    <div className="font-body text-xs uppercase tracking-[0.15em] text-clay">
                      {p.category}
                    </div>
                    <h3 className="mt-1 font-body text-lg font-semibold text-ink">{p.name}</h3>
                    <p className="mt-1 font-body text-sm text-pretty text-inksoft">
                      {p.services.join(" + ")}
                    </p>
                    <p className="mt-3 font-body text-sm font-medium text-sagedeep">{p.headline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <div className="mx-auto max-w-[44ch] text-center">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Pricing
              </span>
              <h2 className="mt-4 font-display text-4xl font-medium text-balance text-ink md:text-5xl">
                Simple, transparent packages
              </h2>
              <p className="mt-4 font-body text-base text-pretty text-inksoft">
                Har package mein dedicated support aur monthly reporting shamil hai.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
            {PRICING.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-[28px] p-8 ${
                    plan.featured
                      ? "bg-ink shadow-[0_30px_60px_-30px_var(--ink)] ring-1 ring-ink lg:-mt-4 lg:mb-4"
                      : "bg-cream ring-1 ring-black/5"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-clay px-3 py-1 font-body text-[11px] font-medium text-cream">
                      Most Popular
                    </span>
                  )}
                  <span className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-clay">
                    {plan.name}
                  </span>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span
                      className={`font-display text-5xl font-medium ${plan.featured ? "text-cream" : "text-ink"}`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`font-body text-sm ${plan.featured ? "text-cream/60" : "text-inksoft"}`}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    className={`mt-3 font-body text-sm text-pretty ${plan.featured ? "text-cream/70" : "text-inksoft"}`}
                  >
                    {plan.tagline}
                  </p>
                  <ul
                    className={`mt-6 flex-1 space-y-3 font-body text-sm ${plan.featured ? "text-cream/80" : "text-inksoft"}`}
                  >
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className={plan.featured ? "text-sage" : "text-sagedeep"}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    search={{ package: plan.name }}
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-medium transition-opacity hover:opacity-90 ${
                      plan.featured
                        ? "bg-clay text-cream ring-1 ring-clay"
                        : "bg-cream text-ink ring-1 ring-sandline"
                    }`}
                  >
                    Choose {plan.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS + FAQ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-[28px] bg-sand p-9 ring-1 ring-black/5">
                <div>
                  <div className="font-display text-5xl leading-none font-semibold text-clay">“</div>
                  <p className="font-display text-2xl leading-snug text-balance text-ink">
                    {TESTIMONIALS[0].text}
                  </p>
                </div>
                <div className="mt-8">
                  <div className="font-body text-sm font-semibold text-ink">
                    {TESTIMONIALS[0].author}
                  </div>
                  <div className="font-body text-xs text-inksoft">{TESTIMONIALS[0].role}</div>
                </div>
                <div className="mt-8 grid gap-4 border-t border-sandline pt-6">
                  {TESTIMONIALS.slice(1).map((t) => (
                    <div key={t.author}>
                      <p className="font-body text-sm text-pretty text-inksoft">“{t.text}”</p>
                      <p className="mt-1 font-body text-xs text-ink">
                        {t.author} — {t.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                FAQ
              </span>
              <h2 className="mt-3 font-display text-3xl font-medium text-ink">Sawal aur jawab</h2>
              <div className="mt-6">
                <FaqAccordion items={FAQS} />
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-whatsapp px-6 py-3 font-body text-sm font-medium text-cream transition-opacity hover:opacity-90"
              >
                WhatsApp par sawal poochein
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
