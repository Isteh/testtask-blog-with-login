import { HTMLAttributes, ReactNode } from 'react';

export interface ITitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}
