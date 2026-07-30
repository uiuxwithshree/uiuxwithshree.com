import { testimonials } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const tones = ["coral", "sky"] as const;

export default function Testimonials() {
  return (
    <section className="hairline wrap py-16 md:py-24">
      <Reveal>
        <p className="eyebrow">Kind words</p>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => {
          const tone = tones[i % tones.length];
          return (
            <Reveal
              key={t.name}
              delay={i * 80}
              className="lift rounded-2xl border border-line p-7"
            >
              <div className="flex h-full flex-col justify-between items-start">
                <div>
                  <span
                    aria-hidden="true"
                    className={`chip chip-${tone} font-display text-lg leading-none`}
                  >
                    “
                  </span>

                  <p className="mt-4 font-display text-xl font-medium leading-snug tracking-tight md:text-2xl">
                    {t.quote}
                  </p>
                </div>

                <p className="mt-4 text-sm text-ink-soft">
                  {t.name} · {t.role}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
