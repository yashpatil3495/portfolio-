import { useEffect, useState, type RefObject } from 'react';

/** Desktop arrow controls for a horizontal rail. Hidden on touch, where swiping is native. */
export function RailButtons({ rail }: { rail: RefObject<HTMLDivElement | null> }) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const update = () => {
      setCanLeft(el.scrollLeft > 8);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [rail]);

  const page = (dir: 1 | -1) => {
    const el = rail.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const base =
    'absolute top-8 bottom-8 z-20 hidden w-[var(--gutter)] min-w-10 items-center justify-center bg-gradient-to-r opacity-0 transition duration-300 group-hover/rail:opacity-100 [@media(hover:hover)]:flex';

  const ChevronLeft = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="text-bone transition group-hover/rail:text-white">
      <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const ChevronRight = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="text-bone transition group-hover/rail:text-white">
      <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <>
      {canLeft && (
        <button type="button" aria-label="Scroll left" onClick={() => page(-1)} className={`${base} left-0 from-ink/90 to-transparent`}>
          <ChevronLeft />
        </button>
      )}
      {canRight && (
        <button type="button" aria-label="Scroll right" onClick={() => page(1)} className={`${base} right-0 from-transparent to-ink/90`}>
          <ChevronRight />
        </button>
      )}
    </>
  );
}
