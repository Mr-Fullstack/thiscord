import { ThypografyProps } from '@/types';
import { GlobalHeading } from './GlobalHeading';

export function Body({ size, children, ...props }: ThypografyProps) {
  return <GlobalHeading size={size} type='body'  {...props}> {children} </GlobalHeading>
}
