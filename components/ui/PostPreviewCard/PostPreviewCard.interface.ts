import { Url } from 'next/dist/shared/lib/router/router';

export interface IPostPreviewCardProps {
  title: string;
  date: Date;
  tags: Array<string>;
  description: string;
  href: Url;
}
