import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthBox } from "@/components/AuthBox/AuthBox";
import { Container } from "@/components/GridSystem";
import { Header } from "@/components/Header/Header";
import { appLanguage } from '@/contexts/LanguageProvider';
import { Hero } from '@/components/Thypografy/Hero';
import { Body } from '@/components/Thypografy/Body';
import { Btn } from '@/components/Btn/Btn';
import qr_code from '@/globals/images/qr_code.svg';
import style from '@/sass/main.module.scss';
import { IconClose } from "@/components/Icon/Icon";

export default function Signin() {
  const { t } = appLanguage();
  const navigate = useNavigate();
  const handlerBackPage = () => {
    navigate('/')
  }
  React.useEffect(() => {
    const handlerClickOutSide = ({ target }: any) => {
      if (target.classList.contains(style.container)) {
        navigate('/')
      }
    }
    document.addEventListener('click', handlerClickOutSide)
    return (() => document.removeEventListener('click', handlerClickOutSide))
  })
  return (
    <React.Fragment>
      <Header />
      <Container>
        <AuthBox>
          <div className={style.auth_header}>
            <div className={style.auth_close} onClick={handlerBackPage}>
              <IconClose />
            </div>
          </div>
          <div className={style.auth_body}>
            <div>
              <div className={style.auth_greetings}>
                <Hero size='x4'>{t('authSignInTitle')}</Hero>
                <Body size='x3'>{t('authSignMessage')}</Body>
              </div>
              <form action="" className={style.form}>
                <div className={style.form_group}>
                  <label htmlFor="email">{t('email')}</label>
                  <input type="email" id='email' />
                </div>
                <div className={style.form_group}>
                  <label htmlFor="password">{t('password')}</label>
                  <input type="password" id='password' />
                </div>
                <Body size='x5'>
                  <a href="">{t('formPasswordRecovery')}</a>
                </Body>
                <Btn type='submit' title={t('login')} model='full' radius='normal' />
                <Body size='x5'>
                  {t('formAccountCreate')} <Link to='/signup'>{t('formRegister')}</Link>
                </Body>
              </form>
            </div>
            <div className={style.qr_code_area}>
              <img src={qr_code} alt="" />
              <Hero size='x4'>{t('qrCodeSignin')}</Hero>
              <Body size='x4'>{t('qrCodeInfo')}</Body>
            </div>
          </div>
        </AuthBox>
      </Container>
    </React.Fragment>
  )
}
