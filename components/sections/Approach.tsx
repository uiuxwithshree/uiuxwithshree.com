import { approach } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Approach() {
  return (
    <section id="approach" className="hairline wrap py-16 md:py-24">
      <Reveal>
        <p className="eyebrow">{approach.eyebrow}</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-medium tracking-tight md:text-4xl">
          {approach.title}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {approach.points.map((point, i) => (
          <Reveal key={point.title} delay={i * 70} className="border-t border-line pt-5">
            <h3 className="font-display text-lg font-medium leading-snug">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
