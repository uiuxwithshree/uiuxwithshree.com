import Link from "next/link";
import { CaseStudy as CaseStudyType } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function CaseStudyCard({ study }: { study: CaseStudyType }) {
  return (
    <Reveal as="article" className="py-4 md:py-0">
      <Link
        href={`/work/${study.slug}`}
        className="lift group grid rounded-2xl border border-line p-5 focus-visible:outline-offset-8 sm:p-7 md:min-h-full md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
        data-cursor={study.status === "shipped" ? "Read the full story" : "See what's in progress"}
      >

        <div className="min-w-0">

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-sm text-ink-faint">{study.index}</span>
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
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            
            <Image
              src={study.thumbnail}
              alt={study.title}
              width={220}
              height={165}
              className="aspect-[4/3] w-full rounded-xl object-cover sm:w-44 sm:flex-shrink-0 md:w-52"
            />
            <div className="flex-1 min-w-0">
              <h3 className="max-w-2xl font-display text-2xl font-medium leading-[1.15] tracking-tight [overflow-wrap:anywhere] md:text-3xl">
                {study.title}
              </h3>
            </div>

          </div>

          <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{study.oneLiner}</p>

        </div>

      </Link>
    </Reveal>
  );
}
