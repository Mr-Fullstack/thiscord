import React from 'react'
import { Link } from 'react-router-dom'
import { AuthBox } from "@/components/AuthBox/AuthBox";
import { Container } from "@/components/GridSystem";
import { Header } from "@/components/Header/Header";
import { appLanguage } from '@/contexts/LanguageProvider';
import { Hero } from '@/components/Thypografy/Hero';
import { Body } from '@/components/Thypografy/Body';
import { Btn } from '@/components/Btn/Btn';

import qr_code from '@/globals/images/qr_code.svg';
import style from '@/sass/main.module.scss';

export default function Signup() {

  const { t }  = appLanguage();

  return (
    <React.Fragment>
      <Header/>
      <Container>
        <AuthBox>
        <div>
                <div className={style.auth_greetings}>
                    <Hero size='x4'>{t('authSignUpTitle')}</Hero>
                </div>
                <form action="" className={style.form}>
                    <div className={style.form_group}>
                        <label htmlFor="email">{t('email')}</label>
                        <input type="email" id='email' />
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="username">{t('username')}</label>
                        <input type="text" id='username' />
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="password">{t('password')}</label>
                        <input type="password" id='password' />
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="birthdate">{t('birthdate')}</label>
                        {/* <input type="password" id='password' /> */}
                    </div>
                    <Body size='x5'>
                     <Link to='/signin'>{t('formHasAccount')}</Link>
                    </Body>
                    <Btn type='submit' title={t('continue')} model='full'  radius='normal'/>
                    <Body size='x5'>
                    {t('agreeRegister')} <Link to='/signup'>{t('terms')}</Link> {t('and')}  <Link to='/signup'>{t('privacy')}</Link> 
                    </Body>
                </form>
            </div>
        </AuthBox>
      </Container>
    </React.Fragment>
  )
}
