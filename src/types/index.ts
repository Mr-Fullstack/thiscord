import { ButtonHTMLAttributes } from "react";

export interface ObjectKeyFindArray {
  [key: string]: string | JSX.Element;
}

export interface ChildrenProps extends React.HTMLAttributes<HTMLDivElement> { }

export interface ThypografyProps extends ChildrenProps {
  size: 'x1' | 'x2' | 'x3' | 'x4';
  type?: 'heading' | 'hero' | 'body';
}
export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  title: string;
  size?: string | number;
  radius?: 'rounded' | 'normal';
  model?: 'outline' | 'full'
}

export interface PageMapProps {
  title: string;
  list: Array<PageLinkProps>;
}

export interface PageMapListLinksProps {
  list: Array<PageLinkProps>;
}

export interface PageLinkProps {
  name: string;
  url: string;
}

export interface HeroClasseProps extends ObjectKeyFindArray {
  [key: string]: JSX.Element;
}
export interface TextBodyClasseProps extends ObjectKeyFindArray {
  [key: string]: string;
}

