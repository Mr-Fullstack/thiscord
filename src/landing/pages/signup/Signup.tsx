import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthBox } from "@/components/AuthBox/AuthBox";
import { Container } from "@/components/GridSystem";
import { Header } from "@/components/Header/Header";
import { appLanguage } from '@/contexts/LanguageProvider';
import { Hero } from '@/components/Thypografy/Hero';
import { Body } from '@/components/Thypografy/Body';
import { Btn } from '@/components/Btn/Btn';
import style from '@/sass/main.module.scss';
import { SelectOption } from '@/landing/components/SelectOption/SelectOption';
import { generateArrayNumber } from '@/helpers/generateArrayNumber';
import { IconClose } from '@/components/Icon/Icon';

export default function Signup() {
  const { t } = appLanguage();
  const days = generateArrayNumber(31)
  const years = generateArrayNumber(1870, 2014).reverse()
  const navigate = useNavigate();

  const handlerBackPage = () => {
    navigate('/')
  }

  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ];

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
          <div>
            <div className={style.auth_close} onClick={handlerBackPage}>
              <IconClose />
            </div>
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
                <div className={style.select_options_group}>
                  <SelectOption type="text" name="day" placeholder={t('day')} data={days} />
                  <SelectOption type="text" name="month" placeholder={t('month')} data={months} />
                  <SelectOption type="text" name="year" placeholder={t('year')} data={years} />
                </div>
              </div>
              <Body size='x5'>
                <Link to='/signin'>{t('formHasAccount')}</Link>
              </Body>
              <Btn type='submit' title={t('continue')} model='full' radius='normal' />
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
