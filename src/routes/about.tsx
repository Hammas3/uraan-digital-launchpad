import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { STATS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Uraan Digital — Pakistan's Growth Partner" },
      {
        name: "description",
        content:
          "Uraan Digital ek Pakistani digital marketing team hai jo transparent reporting aur measurable growth par kaam karti hai.",
      },
      { property: "og:title", content: "About Uraan Digital — Pakistan's Growth Partner" },
      {
        property: "og:description",
        content: "Hamari kahani, values aur kaam karne ka tareeqa.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    title: "Clarity",
    body: "Har rupee ka hisaab. Reports simple hoti hain, jargon ke bagair.",
  },
  {
    title: "Craft",
    body: "Design aur copy par utna hi kaam jitna strategy par — kyunke quality bikti hai.",
  },
  {
    title: "Consistency",
    body: "Har hafte kaam hota hai, sirf campaign launch ke din nahi.",
  },
];

const PROCESS = [
  { step: "01", title: "Discovery", body: "Aapka business, customers aur competition samajhna." },
  { step: "02", title: "Strategy", body: "Channels, budget aur 90-day roadmap tay karna." },
  { step: "03", title: "Build & Launch", body: "Website, creatives aur campaigns live karna." },
  { step: "04", title: "Optimise", body: "Data dekh kar har hafte behtar karna aur scale karna." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Ek team jo Pakistani businesses ke saath barhti hai"
        description="2023 mein Karachi se shuru hone wali Uraan Digital ab poore Pakistan ke brands ke saath kaam karti hai — startups se lekar established retailers tak."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-sandline ring-1 ring-sandline md:grid-cols-4">
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

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Hamari kahani
              </span>
              <h2 className="mt-4 font-display text-3xl font-medium text-balance text-ink md:text-4xl">
                Marketing jo sirf likes nahi, sales laati hai
              </h2>
              <div className="mt-6 space-y-4 font-body text-sm text-pretty text-inksoft md:text-base">
                <p>
                  Uraan Digital ka aghaz ek simple baat se hua: Pakistan ke acche businesses ko
                  aksar acchi marketing nahi milti. Kabhi report samajh nahi aati, kabhi budget
                  bina plan ke kharch ho jata hai.
                </p>
                <p>
                  Hum har client ke saath ek clear 90-day roadmap se shuru karte hain — kya banega,
                  kab launch hoga, aur success ka paimana kya hoga.
                </p>
                <p>
                  Aaj hamari team designers, media buyers, developers aur content writers par
                  mushtamil hai jo Karachi, Lahore aur Islamabad ke brands ke saath kaam karti hai.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="rounded-[24px] bg-cream p-7 ring-1 ring-black/5">
                    <h3 className="font-body text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="mt-2 font-body text-sm text-pretty text-inksoft">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Reveal>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Process
            </span>
            <h2 className="mt-4 max-w-[40ch] font-display text-3xl font-medium text-balance text-ink md:text-4xl">
              Chaar qadam, ek clear rasta
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className="h-full rounded-[24px] bg-sand p-7 ring-1 ring-black/5">
                  <div className="font-display text-2xl font-semibold text-clay">{p.step}</div>
                  <h3 className="mt-4 font-body text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 font-body text-sm text-pretty text-inksoft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
