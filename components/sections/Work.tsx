import { caseStudies, workIntro } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import CaseStudyCard from "@/components/case/CaseStudyCard";

export default function Work() {
  return (
    <section id="work" className="wrap py-16 md:py-24">
      <Reveal>
        <p className="eyebrow">{workIntro.eyebrow}</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-tight md:text-4xl">
          {workIntro.title}
        </h2>
        <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">{workIntro.body}</p>
      </Reveal>

      <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
