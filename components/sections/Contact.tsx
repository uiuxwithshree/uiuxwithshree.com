import { contact, profile } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Sticker from "@/components/ui/Sticker";

export default function Contact() {
  return (
    <section id="contact" className="hairline wrap relative py-16 md:py-28">
      <Sticker
        kind="sparkle"
        color="lilac"
        rotate={12}
        className="right-6 top-10 hidden md:block"
      />
      <Reveal>
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl">
          {contact.title}
        </h2>
        <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{contact.body}</p>

        <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={`mailto:${profile.email}`} className="btn btn-solid">
            {profile.email}
          </a>
          <a href={profile.resumeHref} className="btn btn-ghost">
            Download résumé
          </a>
        </div>
      </Reveal>
    </section>
  );
}
