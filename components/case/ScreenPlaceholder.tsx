import { ChipColor } from "@/lib/site";
import Image from "next/image";

interface ScreenPlaceholderProps {
  label: string;
  caption: string;
  tone?: ChipColor;
  img?: string;
}

export default function ScreenPlaceholder({ label, caption, tone = "sky", img }: ScreenPlaceholderProps) {
  return (
    <figure className="flex min-w-[220px] flex-1 flex-col gap-3 sm:min-w-[240px]">
      <div
        className={`lift relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-line-strong screen-${tone}`}
      >
        {img ? (
          <Image
            src={img}
            alt={label}
            fill
            className=" h-full w-full object-fill object-center"
          />
        ) : (
          
        <div
          aria-hidden="true"
          className="absolute inset-x-3 top-3 flex items-center gap-1.5"
        >
          <span className={`h-2 w-2 rounded-full dot-${tone} opacity-60`} />
          <span className="h-2 w-2 rounded-full bg-ink-faint opacity-30" />
          <span className="h-2 w-2 rounded-full bg-ink-faint opacity-30" />
        </div>
        )}
        
        <span className="eyebrow rounded-full border border-line-strong bg-paper px-3 py-1">
          {label}
        </span>
      </div>
      <figcaption className="text-sm leading-snug text-ink-soft">{caption}</figcaption>
    </figure >
  );
}
