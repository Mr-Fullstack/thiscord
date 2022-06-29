import { ThypografyProps } from '@/types';
import { GlobalHeading } from './GlobalHeading';

export function Heading({ size, children, ...props }: ThypografyProps) {
  return <GlobalHeading size={size} type='heading'  {...props}> {children} </GlobalHeading>
}
