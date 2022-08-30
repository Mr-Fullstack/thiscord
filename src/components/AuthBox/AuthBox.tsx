import React from 'react'
import style from '@/sass/main.module.scss';
import { ChildrenProps } from '@/types';

interface AuthBoxProps extends ChildrenProps { }
export function AuthBox({ children }: AuthBoxProps) {
    return (
        <div className={style.auth_box} >
            {children}
        </div>
    )
}

