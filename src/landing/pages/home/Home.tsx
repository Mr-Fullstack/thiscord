import React from 'react';
import { appLanguage } from '@/contexts/LanguageProvider';
import { Col, Container, Row } from '@/components/GridSystem';
import { Hero } from '@/components/Thypografy/Hero';
import { Btn } from '@/components/Btn/Btn';
import { Heading } from '@/components/Thypografy/Heading';
import { IconInstallBrowser, IconInstallDesktop } from '@/components/Icon/Icon';
import home from '@/sass/main.module.scss';
import desktop from '@/globals/images/desktop.svg';
import friends from '@/globals/images/school_friends.svg';
import club from '@/globals/images/breakfast_club.svg';
import call from '@/globals/images/video_call.svg';
import { Body } from './../../../components/Thypografy/Body';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { setPageName,removePageName } from '@/helpers/landing';
import helpers from '@/helpers';

export default function Home() {
  const { t } = appLanguage();

  React.useEffect( () => {

    const offsetTop = window.innerWidth > 1200 ? 600 : 400;

    const toggleFadeSection = (evt: any) => {
      const sections = document.querySelectorAll(`.${home.js_move}`);
      sections.forEach(item => {
        if (item.getBoundingClientRect().top <= offsetTop) {
          if (item.children[0].children[0].classList.contains(home.fade_out)) {
            item.children[0].children[0].classList.remove(home.fade_out);
          }
          item.children[0].children[0].classList.add(home.fade_in);
        }

        if (item.getBoundingClientRect().top > offsetTop) {
          item.children[0].children[0].classList.remove(home.fade_in);
          item.children[0].children[0].classList.add(home.fade_out);
        }
      })
    }
    document.addEventListener("scroll", toggleFadeSection);

    return () => document.removeEventListener("scroll", toggleFadeSection);
  })

  return (
    <React.Fragment>
        <Header />
        <section className={home.section_hero}>
          <Container>
            <Row>
              <Col xl={8}>
                <Hero size="x1" className={home.section_hero_title}>
                  {t('hero_message')}
                </Hero>
                <div className={home.cta}>
                  <Btn title='download for windows'>
                    <IconInstallDesktop />
                  </Btn>
                  <Btn title='open in your browser' bgColor='secondary_7' radius='rounded' >
                    <IconInstallBrowser />
                  </Btn>
                </div>
              </Col>
              <Col xl={4}>
                <img src={desktop} alt="desktop" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={home.section_friends + " " + home.js_move}>
          <Container>
            <div className={home.section_wrapper}>
              <div>
                <Hero size="x1" className={home.section_hero_title}>
                  {t('friends_title')}
                </Hero>
                <Body size='x1'>
                  {t('friends_text')}
                </Body>
              </div>
              <img src={friends} alt="friends" />
            </div>
          </Container>
        </section>
        <section className={home.section_club + " " + home.js_move}>
          <Container>
            <div className={home.section_wrapper + " " + home.section_wrapper_reverse}>
              <div>
                <Hero size="x1" className={home.section_hero_title}>
                  {t('club_title')}
                </Hero>
                <Body size='x1'>
                  {t('club_text')}
                </Body>
              </div>
              <img src={club} alt="club" />
            </div>
          </Container>
        </section>
        <section className={home.section_call + " " + home.js_move}>
          <Container>
            <div className={home.section_wrapper + " " + home.section_wrapper_no_flex}>
              <img src={call} alt="call" />
              <div>
                <Hero size="x2" className={home.section_hero_title}>
                  {t('call_title')}
                </Hero>
              </div>
            </div>
          </Container>
        </section>
        <Footer />
    </React.Fragment>
  )
}
