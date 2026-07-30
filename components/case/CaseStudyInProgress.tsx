import { CaseStudy as CaseStudyType } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function CaseStudyInProgress({ study }: { study: CaseStudyType }) {
  return (
    <article className="wrap py-10 md:py-14">
      {/* Header — same shape as a full case study, so it doesn't feel like a dead end */}
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-sm text-ink-faint">Case study · {study.index}</span>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span key={tag.label} className={`chip chip-${tag.color}`}>
                {tag.label}
              </span>
            ))}
          </div>
          <span className="chip chip-mint gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full dot-mint" aria-hidden="true" />
            In progress
          </span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h1 className="mt-5 max-w-2xl font-display text-[1.9rem] font-medium leading-[1.15] tracking-tight md:text-[2.5rem]">
          {study.title}
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
          {study.oneLiner}
        </p>
      </Reveal>

      <Reveal delay={140}>
        <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 border-y border-line py-6 min-[380px]:grid-cols-2 sm:grid-cols-4">
          {study.meta.map((m) => (
            <div key={m.label} className="min-w-0">
              <dt className="eyebrow">{m.label}</dt>
              <dd className="mt-1 text-sm font-medium text-ink [overflow-wrap:anywhere]">{m.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* The honest placeholder */}
      <Reveal delay={180}>
        <div className="mt-14 max-w-lg rounded-2xl border border-line bg-panel p-6 sm:p-8 md:p-10">
          <p className="eyebrow">Case study — in progress</p>
          <h2 className="mt-4 font-display text-xl font-medium leading-snug md:text-2xl">
            The full breakdown is being written.
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            The process, decisions, and final screens are coming soon.
          </p>
        </div>
      </Reveal>
    </article>
  );
}
