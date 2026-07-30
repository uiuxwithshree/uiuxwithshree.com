import { ChipColor } from "@/lib/site";

interface ScreenPlaceholderProps {
  label: string;
  caption: string;
  tone?: ChipColor;
}

export default function ScreenPlaceholder({ label, caption, tone = "sky" }: ScreenPlaceholderProps) {
  return (
    <figure className="flex min-w-[220px] flex-1 flex-col gap-3 sm:min-w-[240px]">
      <div
        className={`lift relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-line-strong screen-${tone}`}
      >
        {/* A faint window chrome so the placeholder reads as "a screen" rather than a blank card */}
        <div
          aria-hidden="true"
          className="absolute inset-x-3 top-3 flex items-center gap-1.5"
        >
          <span className={`h-2 w-2 rounded-full dot-${tone} opacity-60`} />
          <span className="h-2 w-2 rounded-full bg-ink-faint opacity-30" />
          <span className="h-2 w-2 rounded-full bg-ink-faint opacity-30" />
        </div>
        <span className="eyebrow rounded-full border border-line-strong bg-paper px-3 py-1">
          {label}
        </span>
      </div>
      <figcaption className="text-sm leading-snug text-ink-soft">{caption}</figcaption>
    </figure>
  );
}
