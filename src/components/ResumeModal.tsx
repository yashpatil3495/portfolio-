import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Full-screen PDF viewer. On phones (where inline PDFs are unreliable) it offers open/download instead. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const small = useMedia('(max-width: 767px)');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story</p>
        <div className="flex items-center gap-2">
          <a href={profile.resumePdf} download="Yash_Patil_Resume.pdf" className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink">
            ⤓ Download
          </a>
          <button type="button" onClick={onClose} aria-label="Close resume" data-cursor="close" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20">
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter flex-1 pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {small ? (
          <div data-lenis-prevent className="h-full overflow-y-auto">
            <ResumeSheet />
            <a href={profile.resumePdf} target="_blank" rel="noreferrer" className="glass mt-4 flex min-h-12 items-center justify-center rounded-md text-sm font-semibold text-bone">
              Open original PDF ↗
            </a>
          </div>
        ) : (
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-ink-2">
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(229,19,43,0.16),rgba(12,12,17,0.96))] transition-opacity duration-500 ${
                loaded ? 'opacity-0' : 'animate-pulse opacity-100'
              }`}
            >
              <div className="h-3 w-40 rounded-full bg-crimson-2/30" />
              <div className="h-2.5 w-64 rounded-full bg-white/10" />
              <div className="h-2.5 w-52 rounded-full bg-white/10" />
            </div>
            <iframe
              title="Yash Patil resume (PDF)"
              src={`${profile.resumePdf}#view=FitH`}
              onLoad={() => setLoaded(true)}
              className="h-full w-full rounded-xl bg-white"
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
