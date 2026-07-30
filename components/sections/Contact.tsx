import { contact, profile } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Sticker from "@/components/ui/Sticker";
import ContactForm from "@/components/ui/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="hairline wrap relative py-16 md:py-28">
      <div className="grid gap-14 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{contact.body}</p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={`mailto:${profile.email}`} data-cursor="Say hi 👋" className="btn btn-solid">
              {profile.email}
            </a>
            <a href={profile.resumeHref} data-cursor="Grab a copy ↓" className="btn btn-ghost">
              Download résumé
            </a>
            <a href="https://cal.com/shree-pspvnd/30min" data-cursor="Schedule a meeting" className="btn btn-ghost">
              Schedule a meeting
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="relative">
          <Sticker kind="sparkle" color="lilac" rotate={12} className="-right-2 -top-5 hidden md:block" />
          <div className="rounded-3xl border border-line bg-panel p-6 shadow-[0_18px_40px_-24px_rgba(20,22,26,0.25)] sm:p-8">
            <p className="eyebrow">Send a message</p>
            <h3 className="mt-2 font-display text-xl font-medium tracking-tight">
              I usually reply within a day.
            </h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}