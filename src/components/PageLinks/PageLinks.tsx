import React from 'react'
import globalStyles from '@/sass/main.module.scss';
import { PageMapListLinksProps } from '@/types';
import { Body } from '../Thypografy/Body';
import { appLanguage } from '@/contexts/LanguageProvider';

export function PageLinks({ list }: PageMapListLinksProps) {
  const { t } = appLanguage();
  return (
    <ul className={globalStyles.page_link_list}>
      {
        list.map(link => (
          <li key={link.name}>
            <a href={link.url} className={globalStyles.page_link_name}>
              <Body size='x3'>{t(link.name)}</Body>
            </a>
          </li>
        ))
      }
    </ul>
  )
}
