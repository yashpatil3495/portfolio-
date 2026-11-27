import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';
import YPLogo from './YPLogo';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        <circle cx="90" cy="210" r="110" fill={`url(#g-${project.id})`} opacity="0.28" />
        {project.motif === 'scholar' && (
          <g fill="none" stroke={a}>
            <rect x="208" y="70" width="120" height="150" rx="10" strokeWidth="1.6" strokeOpacity="0.35" transform="rotate(-8 268 145)" />
            <rect x="226" y="60" width="120" height="150" rx="10" strokeWidth="2" strokeOpacity="0.85" />
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="244" x2={i === 3 ? 290 : 328} y1={96 + i * 22} y2={96 + i * 22} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.55 - i * 0.08} />
            ))}
            <circle cx="336" cy="190" r="26" strokeWidth="2.5" />
            <path d="M355 209 l22 22" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M326 190 l8 8 l14 -16" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {project.motif === 'emotion' && (
          <g fill="none" stroke={a}>
            <circle cx="290" cy="110" r="64" strokeWidth="2" strokeOpacity="0.85" />
            <circle cx="290" cy="110" r="82" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 8" />
            <circle cx="268" cy="98" r="5" fill={a} stroke="none" />
            <circle cx="312" cy="98" r="5" fill={a} stroke="none" />
            <path d="M262 128 Q290 158 318 128" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M190 220 h46 l10 -22 l16 44 l14 -34 l10 12 h100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
          </g>
        )}
        {project.motif === 'cipher' && (
          <g fill="none" stroke={a}>
            {[0, 1, 2, 3, 4].map((r) =>
              [0, 1, 2, 3, 4, 5].map((c) => {
                const on = (r * 7 + c * 3 + r * c) % 3 === 0;
                return (
                  <rect key={`${r}-${c}`} x={196 + c * 30} y={40 + r * 30} width="22" height="22" rx="3" strokeWidth="1.4" strokeOpacity={on ? 0.9 : 0.25} fill={on ? a : 'none'} fillOpacity="0.3" />
                );
              }),
            )}
            <g transform="translate(262 206)">
              <rect x="0" y="14" width="44" height="30" rx="6" strokeWidth="2" strokeOpacity="0.9" />
              <path d="M8 14 v-8 a14 14 0 0 1 28 0 v8" strokeWidth="2" strokeOpacity="0.9" />
              <circle cx="22" cy="29" r="3" fill={a} stroke="none" />
            </g>
          </g>
        )}
        {project.motif === 'focus' && (
          <g fill="none" stroke={a}>
            <circle cx="290" cy="130" r="76" strokeWidth="2.5" strokeOpacity="0.85" />
            <circle cx="290" cy="130" r="62" strokeWidth="1" strokeOpacity="0.35" />
            {Array.from({ length: 12 }, (_, i) => (
              <line key={i} x1="290" x2="290" y1="70" y2={i % 3 === 0 ? 80 : 75} strokeWidth="2" strokeOpacity="0.5" transform={`rotate(${i * 30} 290 130)`} />
            ))}
            <path d="M290 130 L290 92" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M290 130 L318 146" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.7" />
            <circle cx="290" cy="130" r="5" fill={a} stroke="none" />
            <g strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round">
              <path d="M204 246 v-28 l34 -8 v28" />
              <circle cx="198" cy="246" r="7" fill={a} fillOpacity="0.5" />
              <circle cx="232" cy="238" r="7" fill={a} fillOpacity="0.5" />
            </g>
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav, hero and footer. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <YPLogo animate={false} className="h-[1.05em] w-auto" />
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
