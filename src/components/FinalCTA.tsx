import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const reduced = useReducedMotionPref();
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.25'] });
  const headingScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const headingY = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const ctas = [
    { label: "Let's Build", href: `mailto:${profile.email}?subject=${encodeURIComponent("Let's build something")}`, primary: true, cursor: 'play' },
    { label: 'LinkedIn', href: profile.links.linkedin, cursor: 'link' },
    { label: 'GitHub', href: profile.links.github, cursor: 'link' },
    { label: 'Email', href: `mailto:${profile.email}`, cursor: 'link' },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden px-4 pt-16 text-center sm:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <div className="relative my-auto flex w-full max-w-5xl flex-col items-center py-12 sm:py-16">
        <motion.p
          className="relative mb-6 pl-[0.35em] text-[11px] font-bold uppercase tracking-[0.35em] text-crimson-2 sm:pl-[0.5em] sm:tracking-[0.5em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.p>
        <motion.h2
          className="relative font-display leading-[0.85] tracking-[0.02em] text-bone"
          style={reduced ? { fontSize: 'clamp(3.2rem, 13vw, 12rem)' } : { fontSize: 'clamp(3.2rem, 13vw, 12rem)', scale: headingScale, y: headingY, opacity }}
        >
          TO BE CONTINUED
        </motion.h2>

        <motion.div
          className="relative mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          <p className="pl-[0.16em] font-sans text-xl font-semibold tracking-[0.16em] text-bone sm:pl-[0.2em] sm:text-3xl sm:tracking-[0.2em]">{profile.displayName.toUpperCase()}</p>
          <p className="mt-2 pl-[0.22em] text-[11px] font-semibold tracking-[0.22em] text-mist sm:pl-[0.4em] sm:text-sm sm:tracking-[0.4em]">{profile.role.toUpperCase()}</p>
        </motion.div>

        <motion.div
          className="relative mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
        >
          {ctas.map((c) => (
            <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
              <Magnetic>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  data-cursor={c.cursor}
                  className={`flex min-h-12 items-center gap-2 rounded-full px-5 text-xs font-bold tracking-[0.12em] transition sm:px-7 sm:text-sm ${
                    c.primary ? 'bg-crimson text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] hover:bg-crimson-2' : 'border border-white/25 text-bone hover:border-bone hover:bg-white/10'
                  }`}
                >
                  {c.primary && <span>▶</span>}
                  {c.label.toUpperCase()}
                  {!c.primary && <span className="text-mist">↗</span>}
                </a>
              </Magnetic>
            </motion.div>
          ))}

          <motion.div variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
            <Magnetic>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                title={`Copy ${profile.email}`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-bone transition hover:border-crimson-2 hover:bg-crimson/15 hover:text-crimson-2"
              >
                {copied ? (
                  <svg className="h-4 w-4 text-crimson-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                )}
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <div className="relative mt-4 flex h-8 items-center justify-center">
          <AnimatePresence>
            {copied && (
              <motion.span
                role="status"
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.95 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="rounded-full border border-crimson-2/40 bg-ink-2/90 px-4 py-1 text-xs font-semibold tracking-[0.14em] text-bone shadow-[0_0_24px_rgba(229,19,43,0.28)]"
              >
                Copied!
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="relative mt-8 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.2em] text-smoke sm:mt-10 sm:tracking-[0.24em]">
          <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
            ↺ BACK TO TOP
          </button>
          <button type="button" onClick={onReplay} className="hover:text-bone">
            ▶ REPLAY OPENING
          </button>
        </div>
      </div>

      <footer className="relative w-full px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. Built as a streaming-inspired portfolio.
        </p>
      </footer>
    </section>
  );
}
