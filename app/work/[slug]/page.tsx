import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import CaseStudy from "@/components/case/CaseStudy";
import CaseStudyInProgress from "@/components/case/CaseStudyInProgress";
import { caseStudies, profile } from "@/lib/site";

interface PageParams {
  params: Promise<{ slug: string }>;
}

// Pre-render one static page per case study at build time (required for
// `output: "export"` in next.config.ts).
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: `${study.title} · Case study — ${profile.name}`,
    description: study.oneLiner,
  };
}

export default async function CaseStudyPage({ params }: PageParams) {
  const { slug } = await params;
  const index = caseStudies.findIndex((s) => s.slug === slug);
  const study = caseStudies[index];

  if (!study) notFound();

  const next = caseStudies[(index + 1) % caseStudies.length];
  const hasNext = caseStudies.length > 1 && next.slug !== study.slug;

  return (
    <>
      <Nav />
      <main>
        <div className="wrap pt-8">
          <Link
            href="/#work"
            className="eyebrow inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-ink"
          >
            ← All work
          </Link>
        </div>

        {study.status === "shipped" ? (
          <CaseStudy study={study} />
        ) : (
          <CaseStudyInProgress study={study} />
        )}

        {hasNext && (
          <div className="hairline wrap py-12">
            <p className="eyebrow">Next</p>
            <Link
              href={`/work/${next.slug}`}
              className="group hover:text-coral mt-3 inline-flex max-w-full items-center gap-2 font-display text-xl font-medium tracking-tight [overflow-wrap:anywhere] md:text-2xl"
            >
              {next.title.split("—")[0].trim()}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
