import { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export interface INavLinkProps extends LinkProps {
  children: ReactNode;
}
