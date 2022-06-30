import { ThypografyProps } from '@/types';
import { GlobalHeading } from './GlobalHeading';

export function Body({ size, children, className = '', ...props }: ThypografyProps) {
  return <GlobalHeading size={size} type='body' className={className} {...props}> {children} </GlobalHeading>
}
