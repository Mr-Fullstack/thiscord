import { Container } from '@/components/GridSystem';
import { Logo } from '@/components/Logo/Logo';
import globalStyles from '@/sass/main.module.scss';
import { SelectLanguage } from '@/components/SelectLanguage/SelectLanguage';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { removePageName, setPageName } from '@/helpers/landing';
import { Body } from '../Thypografy/Body';
import { appLanguage } from '@/contexts/LanguageProvider';


export function Header() {
  const { t } = appLanguage();
  const { pathname } = window.location;
  const page = pathname === '/' ? 'home' : pathname.replace('/', '');

  React.useEffect(() => {
    setPageName(page);
    return () => removePageName(page);
  }, [page])

  return (
    <header className={globalStyles.header + " " + (page === 'home' ? globalStyles.header_home : '')}>
      <Container>

        <div className={globalStyles.header_wrapper}>
          <Logo />
          <nav className={globalStyles.header_main_nav}>
            <SelectLanguage className={page === 'signin' || page === 'signup' ? globalStyles.nav_auth : ''} />
            {page === 'home' &&
              <Link to="signin" className={globalStyles.btn + ' ' + globalStyles.btn_rounded}>
                <Body size='x5'>
                  {t('signin')}
                </Body>
              </Link>
            }
          </nav>
        </div>
      </Container>
    </ header>
  )
}
