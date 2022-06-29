import { ChildrenProps } from '@/types'
import globalStyles from '@/sass/main.module.scss';
export function Row({ children }: ChildrenProps) {
  return (
    <div className={globalStyles.row}>{children}</div>
  )
}
