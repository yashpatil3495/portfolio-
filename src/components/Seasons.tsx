import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, seasons, type Project } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, SectionHeading } from './fx';
import EpisodeCard from './EpisodeCard';
import { RailButtons } from './Rail';

export default function Seasons({ onOpen }: { onOpen: (p: Project) => void }) {
  const [active, setActive] = useState(seasons.length - 1);
  const season = seasons[active];
  const rail = useRef<HTMLDivElement>(null);
  const { scrollTo } = useSmoothScroll();

  return (
    <>
      <SectionHeading
        kicker={`${seasons.length} Seasons`}
        title="My Journey"
        aside={<p className="max-w-xs text-sm text-mist">Every stage of the resume, told as a season — select one to see its episodes.</p>}
      />

      {/* season selector */}
      <div
        className="rail gutter mb-8 flex gap-2 overflow-x-auto"
        role="tablist"
        aria-label="Seasons"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            setActive((a) => (a + 1) % seasons.length);
            rail.current?.scrollTo({ left: 0, behavior: 'smooth' });
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            setActive((a) => (a - 1 + seasons.length) % seasons.length);
            rail.current?.scrollTo({ left: 0, behavior: 'smooth' });
          }
        }}
      >
        {seasons.map((s, i) => (
          <button
            key={s.number}
            role="tab"
            aria-selected={i === active}
            type="button"
            onClick={() => {
              setActive(i);
              rail.current?.scrollTo({ left: 0, behavior: 'smooth' });
            }}
            className={`relative shrink-0 rounded-full px-4 py-2.5 text-left transition ${i === active ? 'text-ink' : 'text-mist hover:text-bone'}`}
          >
            {i === active && <motion.span layoutId="season-pill" className="absolute inset-0 rounded-full bg-bone" transition={{ duration: 0.5, ease: EASE }} />}
            <span className="relative block text-[10px] font-bold tracking-[0.24em]">SEASON {String(s.number).padStart(2, '0')}</span>
            <span className="relative block whitespace-nowrap text-sm font-semibold">{s.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={season.number}
          initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="gutter mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
              <span className="text-outline mr-3">S{String(season.number).padStart(2, '0')}</span>
              {season.title}
            </h3>
            <span className="text-sm text-mist">
              {season.period} · {season.episodes.length} {season.episodes.length === 1 ? 'Episode' : 'Episodes'}
            </span>
          </div>
          <p className="gutter max-w-3xl text-[15px] leading-relaxed text-bone/75">{season.synopsis}</p>

          <div className="group/rail relative">
            <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto py-8 [perspective:1200px]">
              {season.episodes.map((e, i) => {
                const targetProject = e.projectId ? projects.find((p) => p.id === e.projectId) : undefined;
                const onAction = targetProject
                  ? () => onOpen(targetProject)
                  : e.sectionId
                    ? () => scrollTo(`#${e.sectionId}`)
                    : undefined;
                return <EpisodeCard key={e.code} episode={e} index={i} onAction={onAction} />;
              })}
            </div>
            <RailButtons rail={rail} />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
