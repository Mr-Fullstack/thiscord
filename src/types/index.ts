import { ButtonHTMLAttributes } from "react";

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
