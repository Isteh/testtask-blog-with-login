import { HTMLAttributes, ReactNode } from 'react';

export interface ISectionWithArticlesListProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title: string;
  href: Url;
}
