import { Url } from 'next/dist/shared/lib/router/router';
import { HTMLAttributes, ReactNode } from 'react';

export interface ISectionWithArticlesListProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title: string;
  href: Url;
}
