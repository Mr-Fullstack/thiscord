import React from 'react';

import { ThypografyProps } from '@/types';
import styles from '@/sass/main.module.scss';

type HeroClasseProps = {
  [key: string]: JSX.Element;
}
type TextBodyClasseProps = {
  [key: string]: string;
}
export function GlobalHeading({ type, size, children, className = '', ...props }: ThypografyProps) {

  const headingClasses: HeroClasseProps = {
    x1: <h1 className={type === 'hero' ? styles.hero_1 : styles.heading_1 + ' ' + className} {...props}> {children} </h1>,
    x2: <h2 className={type === 'hero' ? styles.hero_2 : styles.heading_2 + ' ' + className} {...props}> {children} </h2>,
    x3: <h3 className={type === 'hero' ? styles.hero_3 : styles.heading_3 + ' ' + className} {...props}> {children} </h3>,
    x4: <h4 className={type === 'hero' ? styles.hero_4 : styles.heading_4 + ' ' + className} {...props}> {children} </h4>,
  }
  const textBodyClasses: TextBodyClasseProps = {
    x1: styles.body_1,
    x2: styles.body_2,
    x3: styles.body_3,
    x4: styles.body_4
  }

  if (type === 'body') {
    return <p className={textBodyClasses[size] + ' ' + className} {...props}> {children} </p>
  }
  return headingClasses[size]
}
