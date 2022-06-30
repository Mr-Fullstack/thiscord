import React from 'react'
import { Col, Container, Row } from '@/components/GridSystem'
import styles from '@/sass/main.module.scss';
import { Logo } from '@/components/Logo/Logo';
import { SelectLanguage } from '@/components/SelectLanguage/SelectLanguage';
import { PageMap } from '@/components/PageMap/PageMap';

export function Footer() {

  const pagesMap = [
    {
      title: 'Resources',
      listLinks: [
        {
          name: 'Support',
          url: '#'
        },
        {
          name: 'Blog',
          url: '#'
        },
        {
          name: 'Developers',
          url: '#'
        }
      ]
    },
    {
      title: 'Company',
      listLinks: [
        {
          name: 'About',
          url: '#'
        },
        {
          name: 'Jobs',
          url: '#'
        },
        {
          name: 'Brand',
          url: '#'
        }
      ]
    },
    {
      title: 'Policy',
      listLinks: [
        {
          name: 'Terms',
          url: '#'
        },
        {
          name: 'Privacy',
          url: '#'
        }
      ]
    }
  ]












  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_logo}>
            <Logo />
          </div>
          <div className={styles.footer_social}>

            <a className={styles.social_logo + " " + styles.social_logo_twitter} href="#" />
            <a className={styles.social_logo + " " + styles.social_logo_facebook} href="#" />
            <a className={styles.social_logo + " " + styles.social_logo_instagram} href="#" />
            <a className={styles.social_logo + " " + styles.social_logo_youtube} href="#" />

          </div>
          <div className={styles.footer_links}>
            {pagesMap.map(pageMap => (
              <PageMap key={pageMap.title} title={pageMap.title} list={pageMap.listLinks} />
            ))
            }
          </div>
          <div className={styles.footer_language}>
            <SelectLanguage />
          </div>
          <div className={styles.footer_signup}>

          </div>
        </div>
      </Container>
    </footer>
  )
}
