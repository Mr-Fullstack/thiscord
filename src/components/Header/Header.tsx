import { Hero } from '@/components/Thypografy/Hero';
import { Heading } from '@/components/Thypografy/Heading';
import { Body } from '@/components/Thypografy/Body';
import { Container, Row, Col } from '@/components/GridSystem';
import { Logo } from '@/components/Logo/Logo';
import globalStyles from '@/sass/main.module.scss';


export function Header() {
  return (
    <header className={globalStyles.header}>
      <Container>
        <Logo />
        <div className='select'>
          <div className="select__wrapper">
            <div className={globalStyles.select__selected__item}>
              <div className="country">
                <img className="country_flag" src='' />
                <p className="country_name">Português, BRA</p>
              </div>
              <div className="select__selected__item__icon"></div>
            </div>
            <div className="select__list">
              <div className="select__list__item">
                <div className="country">
                  <img className="country_flag" src='' />
                  <p className="country_name">English, USA</p>
                </div>
              </div>
              <div className="select__list__item">
                <div className="country">
                  <img className="country_flag" src='' />
                  <p className="country_name">Português, BRA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ header>
  )
}
