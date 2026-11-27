import { useId } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE } from './fx';

const Y_PATH = 'M 20 14 H 38 L 66 58 V 106 H 48 V 58 Z';
const P_PATH =
  'M 45 14 H 104 A 30 30 0 0 1 104 74 H 91 V 106 H 73 V 58 Z M 91 30 V 58 H 104 A 14 14 0 0 0 104 30 Z';

/**
 * YP monogram logo — bone white Y + crimson gradient P.
 * Animates with stroke draw-in + fill bloom when `animate` is true (used in intro).
 */
export default function YPLogo({
  className = 'h-20 w-auto sm:h-24',
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  const reduced = useReducedMotionPref();
  const gradId = useId();

  if (!animate || reduced) {
    return (
      <svg viewBox="16 10 122 100" className={className} aria-hidden>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff3d5a" />
            <stop offset="100%" stopColor="#e5132b" />
          </linearGradient>
        </defs>
        <path d={Y_PATH} fill="#f4f1ec" />
        <path d={P_PATH} fill={`url(#${gradId})`} fillRule="evenodd" />
      </svg>
    );
  }

  return (
    <motion.svg
      viewBox="0 0 160 120"
      className={`${className} overflow-visible drop-shadow-[0_0_28px_rgba(229,19,43,0.45)]`}
      aria-label="YP logo"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3d5a" />
          <stop offset="100%" stopColor="#e5132b" />
        </linearGradient>
      </defs>

      {/* Y monogram (bone white) */}
      <motion.g initial={{ x: -6, y: -4 }} animate={{ x: 0, y: 0 }} transition={{ duration: 0.9, ease: EASE }}>
        <motion.path
          d={Y_PATH}
          fill="none"
          stroke="#f4f1ec"
          strokeWidth="2.2"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.9 }}
          animate={{ pathLength: 1, opacity: 0 }}
          transition={{ pathLength: { duration: 0.75, ease: EASE }, opacity: { delay: 0.65, duration: 0.35 } }}
        />
        <motion.path
          d={Y_PATH}
          fill="#f4f1ec"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5, ease: EASE }}
        />
      </motion.g>

      {/* P monogram (signature crimson gradient) */}
      <motion.g initial={{ x: 6, y: 4 }} animate={{ x: 0, y: 0 }} transition={{ duration: 0.9, delay: 0.08, ease: EASE }}>
        <motion.path
          d={P_PATH}
          fill="none"
          stroke="#ff3d5a"
          strokeWidth="2.2"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.9 }}
          animate={{ pathLength: 1, opacity: 0 }}
          transition={{ pathLength: { duration: 0.8, delay: 0.1, ease: EASE }, opacity: { delay: 0.75, duration: 0.35 } }}
        />
        <motion.path
          d={P_PATH}
          fill={`url(#${gradId})`}
          fillRule="evenodd"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
        />
      </motion.g>
    </motion.svg>
  );
}
