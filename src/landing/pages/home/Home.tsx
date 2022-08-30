import React from 'react';
import { appLanguage } from '@/contexts/LanguageProvider';
import { Col, Container, Row } from '@/components/GridSystem';
import { Hero } from '@/components/Thypografy/Hero';
import home from '@/sass/main.module.scss';
import desktop from '@/globals/images/desktop.png';
import friends from '@/globals/images/school_friends.png';
import club from '@/globals/images/breakfast_club.png';
import call from '@/globals/images/video_call.png';
import desktop_3x from '@/globals/images/desktop_3x.png';
import friends_3x from '@/globals/images/school_friends_3x.png';
import club_3x from '@/globals/images/breakfast_club_3x.png';
import call_3x from '@/globals/images/video_call_3x.png';
import { Body } from '@/components/Thypografy/Body';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ButtonDownload } from '../../components/ButtonDownload';
import { Platform } from '@/components/Platform/Platform';


export default function Home() {
  const { t } = appLanguage();

  React.useEffect(() => {

    const toggleFadeSection = (evt: any) => {
      const sections = document.querySelectorAll(`.${home.js_move}`);
      const offsetTop = Math.round(window.innerHeight / 2);
      sections.forEach(item => {
        console.log(Math.round(item.getBoundingClientRect().top), offsetTop)
        if (Math.round(item.getBoundingClientRect().top) <= offsetTop) {
          item.children[0].children[0].classList.remove(home.fade_out);
          item.children[0].children[0].classList.add(home.fade_in);
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
                <div className={home.btn_download_desktop}>
                  <ButtonDownload platform="desktop" />
                  <ButtonDownload platform="web" />
                </div>
                <div className={home.btn_download_mobile}>
                  <Platform rules='ios'>
                    <ButtonDownload platform="ios" />
                  </Platform>
                  <Platform rules='android'>
                    <ButtonDownload platform="android" />
                  </Platform>
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <img src={desktop} alt="desktop" className={home.hidden_xxl} />
              <img src={desktop_3x} alt="desktop" className={home.show_xxl} />
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
            <img src={friends} alt="friends" className={home.hidden_xxl} />
            <img src={friends_3x} alt="friends" className={home.show_xxl} />
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
            <img src={club} alt="club" className={home.hidden_xxl} />
            <img src={club_3x} alt="club" className={home.show_xxl} />
          </div>
        </Container>
      </section>
      <section className={home.section_call + " " + home.js_move}>
        <Container>
          <div className={home.section_wrapper + " " + home.section_wrapper_no_flex}>
            <img src={call} alt="call" className={home.hidden_xxl} />
            <img src={call_3x} alt="call" className={home.show_xxl} />
            <div>
              <Hero size="x2" className={home.section_hero_title}>
                {t('call_title')}
              </Hero>
              <Body size='x1'>
                {t('call_text')}
              </Body>
            </div>
            <div className={home.section_call_cta}>
              <div className={home.btn_download_desktop}>
                <ButtonDownload platform="desktop" />
              </div>
              <div className={home.btn_download_mobile}>
                <Platform rules='ios'>
                  <ButtonDownload platform="ios" />
                </Platform>
                <Platform rules='android'>
                  <ButtonDownload platform="android" />
                </Platform>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  )
}
