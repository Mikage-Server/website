import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

const Linking = ({ href, children }: Props) => {
  return (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  );
};

export default Linking;
