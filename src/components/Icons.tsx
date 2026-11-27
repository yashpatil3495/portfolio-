type IconProps = { className?: string };

export function PlayIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
      <path d="M4.25 2.75a.75.75 0 0 1 1.14-.64l8.25 5a.75.75 0 0 1 0 1.28l-8.25 5a.75.75 0 0 1-1.14-.64v-10Z" />
    </svg>
  );
}

export function DownloadIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M8 2.5v8m0 0-3-3m3 3 3-3M2.5 12.5v.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-.5" />
    </svg>
  );
}

export function PlusIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden className={className}>
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
    </svg>
  );
}

export function ReplayIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M3.5 8a4.5 4.5 0 1 0 1.3-3.18L3 6.5M3 3.5v3h3" />
    </svg>
  );
}

export function ChevronDownIcon({ className = 'h-3 w-3' }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}
