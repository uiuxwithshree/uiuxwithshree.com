"use client";

import { useState } from "react";

import { hero, profile, roleMarquee } from "@/lib/site";
import Highlighted from "@/components/ui/Highlighted";
import Reveal from "@/components/ui/Reveal";
import Avatar from "@/components/ui/Avatar";
import Sticker from "@/components/ui/Sticker";
import Marquee from "@/components/ui/Marquee";

export default function Hero() {
  const greetings = [
    "Hello! How are you?",
    "Salve! Come stai?",
    "Ciao! Come va?",
    "¡Hola! ¿Cómo estás?",
    "Bonjour ! Comment ça va ?",
    "नमस्ते! आप कैसे हैं?"
  ];

  const getRandomGreeting = () =>
    greetings[Math.floor(Math.random() * greetings.length)];

  const [greeting, setGreeting] = useState(getRandomGreeting());

  return (
    <section id="top" className="wrap pb-10 pt-10 md:pb-16 md:pt-20">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between md:gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <Reveal className="hidden md:flex ">
            <p className="eyebrow flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {hero.eyebrow} · {profile.location}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-[2.15rem] font-medium leading-[1.12] tracking-tight text-ink sm:text-[2.4rem] md:text-[3.4rem]">
              <span className="md:hidden">
                <Highlighted
                  text={hero.headline}
                  highlight="feel simple, even when they're not."
                />
              </span>
              <span className="hidden md:inline">
                <Highlighted
                  text={hero.headline}
                  highlight={hero.headlineHighlight}
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
              {hero.sub}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#work" className="btn btn-solid">
                See the work ↓
              </a>
              <a href={profile.resumeHref} download="Shree_Chaurasia_Product_Designer_Resume.pdf" className="btn btn-ghost">
                Download résumé
              </a>
            </div>
          </Reveal>
        </div>

        {/* Avatar */}
        <Reveal
          delay={140}
          className="flex justify-center"
        >
          <div
            className="relative flex h-56 w-56 items-center justify-center"
            data-cursor={greeting}
            onMouseEnter={() => setGreeting(getRandomGreeting())}
          >
            <Avatar name={profile.name} size={176} />

            <Sticker
              kind="sparkle"
              color="coral"
              rotate={-10}
              delay={0}
              className="-right-2 -top-3"
            />
            <Sticker
              kind="cursor"
              color="sky"
              rotate={14}
              delay={900}
              className="-left-4 top-8"
            />
            <Sticker
              kind="diamond"
              color="mint"
              rotate={-16}
              delay={400}
              className="-right-6 bottom-6"
            />
            <Sticker
              kind="squiggle"
              color="lilac"
              rotate={4}
              delay={1300}
              className="-bottom-6 left-2"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={280} className="mt-14 border-y border-line py-4">
        <Marquee
          items={roleMarquee}
          ariaLabel="What I do"
          className="font-mono text-sm text-ink-soft"
        />
      </Reveal>
    </section>
  );
}
