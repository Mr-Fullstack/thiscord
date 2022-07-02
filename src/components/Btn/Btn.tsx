import React from 'react'
import { BtnProps } from '@/types/index';

import globalStyles from '@/sass/main.module.scss';

export function Btn({ children, bgColor, onClick, title, size, model, radius, ...props }: BtnProps) {


  const handlerCLick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(ev);
    }
  }

  const btnClasses = (): string => {
    let bgClass = globalStyles.btn + ' ';

    if (model) {
      bgClass += globalStyles[`btn_${model}`] + " "
    }

    else if (radius) {
      bgClass += globalStyles[`btn_${radius}`] + " "
    }

    else if (bgColor) {
      bgClass += globalStyles[`btn_${bgColor}`] + " "
    }
    else {
      bgClass += globalStyles.btn_rounded + " " + globalStyles.btn_full
    }

    return bgClass;

  }

  return (
    <button className={btnClasses()} onClick={(evt) => handlerCLick(evt)} {...props}>
      {children && children}
      <span>{title}</span>
    </button>
  )
}
