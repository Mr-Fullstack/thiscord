import React from 'react'
import style from '@/sass/main.module.scss';
import { ChildrenProps } from '@/types';

export function AuthBox({children}:ChildrenProps) {
    return (
        <div className={style.auth_box}>
            {children}
        </div>
    )
}