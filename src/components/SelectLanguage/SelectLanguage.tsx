import globalStyles from '@/sass/main.module.scss';

import { Body } from '@/components/Thypografy/Body';
import React from 'react';
import { appLanguage } from '@/contexts/LanguageProvider';


export function SelectLanguage() {

  const { language, languageList, switchLanguage } = appLanguage();


  return (
    <div className={globalStyles.select}>
      <div className={globalStyles.select__wrapper}>
        <div className={globalStyles.select__selected__item}>
          <div className={globalStyles.country}>
            <img className={globalStyles.country_flag} src={language.flag_src} />
            <Body size='x4' className={globalStyles.country_name}>{language.name}</Body>
          </div>
          <div className="select__selected__item__icon"></div>
        </div>
        <div className={globalStyles.select__list}>
          {
            languageList.map(item => (
              <div className={globalStyles.select__list__item} onClick={() => switchLanguage(item.unicode)} key={item.unicode}>
                <div className={globalStyles.country}>
                  <img className={globalStyles.country_flag} src={item.flag_src} />
                  <Body size='x4' className={globalStyles.country_name}>{item.name} </Body>
                </div>
              </div>
            )
            )
          }
        </div>
      </div>
    </div>
  )
}
