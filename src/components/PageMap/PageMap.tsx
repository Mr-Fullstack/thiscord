import React from 'react'
import globalStyles from '@/sass/main.module.scss';
import { PageLinks } from '@/components/PageLinks/PageLinks';
import { Body } from '@/components/Thypografy/Body';
import { PageMapProps } from '@/types';
import { appLanguage } from '@/contexts/LanguageProvider';

export function PageMap({ title, list }: PageMapProps) {
  const { t } = appLanguage();
  return (
    <div className={globalStyles.page_links}>
      <Body size='x3' className={globalStyles.page_link_title}>{t(title)}</Body>
      <PageLinks list={list} />
    </div>
  )
}
