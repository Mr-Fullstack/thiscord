import { ButtonHTMLAttributes } from "react";

export interface ObjectKeyFindArray {
  [key: string]: string;
}

export interface ChildrenProps extends React.HTMLAttributes<HTMLDivElement> { }

export interface ThypografyProps extends ChildrenProps {
  size: 'x1' | 'x2' | 'x3' | 'x4' | 'x5';
  type?: 'heading' | 'hero' | 'body';
}
export interface ButtonDownloadProps extends BtnProps {
  platform: 'ios' | 'android' | 'desktop' | 'web';
}
export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  title?: string;
  size?: string | number;
  radius?: 'rounded' | 'normal';
  model?: 'outline' | 'full';
  imgIcon?: string;
  SvgIcon?: JSX.IntrinsicElements;
  fullWidth?: boolean
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

export interface HeroClasseProps {
  [key: string]: JSX.Element;
}
export interface TextBodyClasseProps extends ObjectKeyFindArray {
  [key: string]: string;
}

