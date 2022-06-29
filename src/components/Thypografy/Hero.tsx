import { ThypografyProps } from '@/types';
import { GlobalHeading } from './GlobalHeading';

export function Hero({ size, children, className = '', ...props }: ThypografyProps) {
  return <GlobalHeading size={size} type='hero' className={className} {...props}> {children} </GlobalHeading>
}
