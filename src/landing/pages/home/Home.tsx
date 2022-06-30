
import globalStyles from '@/sass/main.module.scss';
import { Col, Container, Row } from '@/components/GridSystem';
import { Hero } from '@/components/Thypografy/Hero';
import desktop from '@/globals/images/desktop.svg';
import Btn from '@/components/Btn/Btn';
import { appLanguage } from '@/contexts/LanguageProvider';


export default function Home() {
  const { t } = appLanguage();
  return (
    <div className={globalStyles.section_hero}>
      <Container>
        <Row>
          <Col xl={7}>
            <Hero size="x1" className={globalStyles.section_hero_title}>
              {t('hero_message')}
            </Hero>
            <div>
              <Btn title='download for windows' />
            </div>
          </Col>
          <Col xl={5}>
            <img src={desktop} alt="desktop" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
