import { ChildrenProps } from '@/types';
import globalStyles from '@/sass/main.module.scss';
export function Container({ className = '', children }: ChildrenProps) {
  return (
    <div className={globalStyles.container + ' ' + className}>{children}</div>
  )
}
