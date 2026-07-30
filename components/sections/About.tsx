import { about, profile } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Avatar from "@/components/ui/Avatar";
import Marquee from "@/components/ui/Marquee";

export default function About() {
  return (
    <section id="about" className="hairline wrap py-12 sm:py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] md:gap-12">
        {/* Left */}
        <Reveal>
          <div className="flex items-center gap-3 sm:gap-4">
            <Avatar name={profile.name} size={48} />
            <div>
              <p className="eyebrow">{about.eyebrow}</p>
            </div>
          </div>

          <h2 className="mt-4 max-w-sm font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl">
            {about.title}
          </h2>

          {/* Facts */}
          <div className="mt-8 border-t border-line pt-5 sm:mt-10 sm:pt-6">
            <div className="flex flex-wrap">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="w-1/3 pr-4 pb-5 last:pr-0"
                >
                  <p className="font-display text-xl font-medium text-ink sm:text-2xl">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink-faint">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right */}
        <div className="min-w-0">
          <Reveal>
            <div className="space-y-4">
              {about.bodyParagraphs.map((p) => (
                <p
                  key={p}
                  className="max-w-xl leading-relaxed text-ink-soft"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="mt-8 rounded-2xl border border-line-strong py-4 sm:mt-10"
          >
            <p className="eyebrow px-4 sm:px-5">Tools I reach for</p>

            <div className="mt-2">
              <Marquee
                items={about.tools}
                separator="·"
                ariaLabel="Tools"
                className="font-mono text-sm text-ink"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}