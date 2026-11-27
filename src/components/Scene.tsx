import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTrackProgress } from '../hooks/sectionProgress';
import { useReducedMotionPref } from '../hooks/useMedia';

/**
 * A section of the series. Fades up cleanly on scroll and reports viewing
 * progress for the Continue Exploring row. Skips scale on `originals` so
 * its sticky horizontal scroll container keeps a clean containing block.
 */
export default function Scene({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionPref();
  useTrackProgress(id, ref);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.55'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  const style = reduced ? undefined : id === 'originals' ? { opacity } : { opacity, scale };

  return (
    <motion.section
      id={id}
      ref={ref}
      style={style}
      className={`relative scroll-mt-16 py-24 sm:py-36 ${id !== 'originals' ? '[content-visibility:auto] [contain-intrinsic-size:auto_640px]' : ''} ${className}`}
    >
      {children}
    </motion.section>
  );
}
