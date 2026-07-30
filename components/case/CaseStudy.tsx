import { CaseStudy as CaseStudyType } from "@/lib/site";
import Highlighted from "@/components/ui/Highlighted";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import ScreenPlaceholder from "./ScreenPlaceholder";

export default function CaseStudy({ study }: { study: CaseStudyType }) {
  return (
    <article className="wrap py-10 md:py-14">
      {/* Header */}
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
          {study.status === "in-progress" && (
            <span className="chip chip-mint gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full dot-mint" aria-hidden="true" />
              In progress
            </span>
          )}
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

      <div className="mt-6 flex flex-wrap gap-3">
        {study.externalHref && (
          <Reveal delay={120}>
            <a
              href={study.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-5"
            >
              Original write-up on Notion ↗
            </a>
          </Reveal>
        )}

        {study.figmaHref && (
          <Reveal delay={140}>
            <a
              href={study.figmaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid mt-5"
            >
              Figma design files ↗
            </a>
          </Reveal>
        )}
      </div>



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

      {/* Context */}
      <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <Reveal>
          <p className="eyebrow">01 · Context</p>
          <h4 className="mt-3 font-display text-xl font-medium leading-snug md:text-2xl">
            {study.contextTitle}
          </h4>
        </Reveal>
        <Reveal delay={80}>
          <p className="leading-relaxed text-ink-soft">{study.contextBody}</p>
        </Reveal>
      </div>

      {/* Before / after */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Reveal className="lift rounded-2xl border border-coral p-6">
          <p className="eyebrow">{study.before.title}</p>
          <ul className="mt-4 space-y-3">
            {study.before.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80} className="lift rounded-2xl border border-mint p-6">
          <p className="eyebrow text-ink">{study.after.title}</p>
          <ul className="mt-4 space-y-3">
            {study.after.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Problem breakdown */}
      <div className="mt-16">
        <Reveal>
          <p className="eyebrow">02 · The problem</p>
        </Reveal>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {study.problems.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 70}>
              <span className="font-mono text-sm text-ink-faint">0{i + 1}</span>
              <h5 className="mt-2 font-medium leading-snug">{problem.title}</h5>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{problem.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Core idea */}
      <Reveal className="mt-16 border-y border-line py-10">
        <p className="eyebrow">{study.coreIdeaEyebrow}</p>
        <p className="mt-4 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
          <Highlighted text={study.coreIdea} highlight={study.coreIdeaHighlight} />
        </p>
      </Reveal>

      {/* Screens */}
      <div className="mt-16">
        <Reveal>
          <p className="eyebrow">03 · The screens</p>
        </Reveal>
        <div className="mt-6 flex gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible ">
          {study.screens.map((screen, i) => (
            <Reveal key={screen.label} delay={i * 60}>
              <ScreenPlaceholder label={screen.label} caption={screen.caption} tone={screen.tone} img={screen.img} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="mt-16">
        <Reveal>
          <p className="eyebrow">04 · {study.status === "shipped" ? "Impact" : "Where this is headed"}</p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 min-[380px]:grid-cols-2 lg:grid-cols-4">
          {study.impact.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <p className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                <CountUp value={item.value} />
              </p>
              <p className="mt-1 text-sm font-medium text-ink">{item.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-faint">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Learning */}
      <Reveal className="mt-16 max-w-2xl">
        <p className="eyebrow">05 · Learning</p>
        <h4 className="mt-3 font-display text-xl font-medium leading-snug md:text-2xl">
          {study.learningTitle}
        </h4>
        <p className="mt-3 leading-relaxed text-ink-soft">{study.learningBody}</p>
      </Reveal>
    </article>
  );
}
