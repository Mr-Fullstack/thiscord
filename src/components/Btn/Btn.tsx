import React from 'react'
import { BtnProps } from '@/types/index';

import globalStyles from '@/sass/main.module.scss';
import { Heading } from '@/components/Thypografy/Heading';
import { Body } from '../Thypografy/Body';

export function Btn({ fullWidth,children, bgColor, onClick, title, size, model, radius, ...props }: BtnProps) {


  const handlerCLick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(ev);
    }
  }

  const btnClasses = (): string => {
    let bgClass = globalStyles.btn + ' ';

    if (model) {
      bgClass += globalStyles[`btn_${model}`] + " ";
    }
    if (bgColor) {
       bgClass += globalStyles[`bk_${bgColor}`] + " ";
    }
    if(fullWidth){
      bgClass += globalStyles.btn_full + " " ; 
    }
    if (radius) {
      bgClass += globalStyles[`btn_${radius}`] + " ";
    }
    else {
      bgClass += globalStyles.btn_rounded + " " ;
    }

    return bgClass;

  }

  return (
    <button className={btnClasses()} onClick={(evt) => handlerCLick(evt)}  {...props}>
      {children && children}
      <Body size='x2'>{title}</Body>
    </button>
  )
}
