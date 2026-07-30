import { testimonials } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

const tones = ["coral", "sky", "mint", "lilac"] as const;

export default function Testimonials() {
  // Duplicated back-to-back so the marquee loop is seamless — same trick
  // used by armaanux.in and sidonweb.com. The duplicate is aria-hidden;
  // screen readers get the real list once via the sr-only span below.
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="hairline  wrap py-12 sm:py-16 md:py-24">
      
        <Reveal>
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight md:text-4xl">
            People I&rsquo;ve worked with.
          </h2>
        </Reveal>
      

      <Reveal delay={80} className="mt-10 md:mt-14">
        <div className="marquee-track py-4">
          <span className="sr-only">
            Testimonials:{" "}
            {testimonials.map((t) => `${t.quote} — ${t.name}, ${t.role}`).join(" · ")}
          </span>

          <div className="marquee" aria-hidden="true">
            {loop.map((t, i) => {
              const tone = tones[i % tones.length];
              return (
                <div
                  key={`${t.name}-${i}`}
                  style={{ animationDelay: `${(i % testimonials.length) * 0.4}s` }}
                  className=" mx-3 flex w-[280px] shrink-0 flex-col justify-between bg-paper p-6 sm:w-[340px] sm:p-7 "
                >
                  <div>
                    <span
                      aria-hidden="true"
                      className={`chip chip-${tone} font-display text-lg leading-none`}
                    >
                      &ldquo;
                    </span>
                    <p className="mt-4 font-display text-lg font-medium leading-snug tracking-tight md:text-xl">
                      {t.quote}
                    </p>
                  </div>
                  <p className="mt-5 text-sm text-ink-soft">
                    {t.name} · {t.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}