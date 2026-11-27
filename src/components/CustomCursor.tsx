import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';

const LABELS: Record<string, string> = { view: 'VIEW', play: '▶', link: '↗', drag: '↔', close: '✕' };
const BASE_SIZE = 72;

/**
 * Minimal cursor: a small dot that grows into a labelled disc over elements with
 * `data-cursor="view|play|link|drag|close"`. Desktop only; disabled for reduced motion.
 * Uses GPU `scale` on a fixed-size disc to avoid layout recalculations.
 */
export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });
  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  const lastTarget = useRef<EventTarget | null>(null);
  const lastMode = useRef<string | null>(null);
  const lastHover = useRef(false);
  const lastVisible = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-custom-cursor');
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!lastVisible.current) {
        lastVisible.current = true;
        setVisible(true);
      }
      if (e.target === lastTarget.current) return;
      lastTarget.current = e.target;
      const t = e.target as HTMLElement | null;
      const tagged = t?.closest<HTMLElement>('[data-cursor]');
      const nextMode = tagged?.dataset.cursor ?? null;
      const nextHover = !tagged && !!t?.closest('a,button,[role="button"]');
      if (nextMode !== lastMode.current) {
        lastMode.current = nextMode;
        setMode(nextMode);
      }
      if (nextHover !== lastHover.current) {
        lastHover.current = nextHover;
        setHoverLink(nextHover);
      }
    };
    const leave = () => {
      lastVisible.current = false;
      setVisible(false);
    };
    const press = () => setDown(true);
    const release = () => setDown(false);
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', press, { passive: true });
    window.addEventListener('pointerup', release, { passive: true });
    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  const label = mode ? LABELS[mode] : null;
  const size = label ? (mode === 'view' ? 72 : 52) : hoverLink ? 34 : 10;
  const targetScale = (size / BASE_SIZE) * (down ? 0.85 : 1);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] flex h-[72px] w-[72px] items-center justify-center rounded-full"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{
        scale: targetScale,
        opacity: visible ? 1 : 0,
        backgroundColor: label ? 'rgba(229,19,43,0.92)' : hoverLink ? 'rgba(244,241,236,0.08)' : 'rgba(244,241,236,1)',
        borderColor: hoverLink && !label ? 'rgba(244,241,236,0.7)' : 'rgba(244,241,236,0)',
      }}
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
    >
      <span className="absolute inset-0 rounded-full border-2" style={{ borderColor: 'inherit' }} />
      <AnimatePresence>
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: BASE_SIZE / size }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="font-sans text-[11px] font-bold tracking-[0.18em] text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
