import type { ReactNode } from 'react';

interface UnderlineProps {
  children: ReactNode;
}

export function Underline1({ children }: UnderlineProps) {
  return (
    <span
      className="px-1 font-medium"
      style={{
        background:
          'linear-gradient(to bottom, transparent 0%, transparent 70%, rgb(234, 179, 8, 0.5) 70%, rgb(234, 179, 8, 0.5) 100%)',
      }}
    >
      {children}
    </span>
  );
}
