import globalStyles from '@/sass/main.module.scss';

import { Body } from '@/components/Thypografy/Body';
import React from 'react';
import { appLanguage } from '@/contexts/LanguageProvider';
import iconDown from '@/globals/icons/keyboard_arrow_down.svg';
import { ChildrenProps } from '@/types';

export function SelectLanguage({className}:ChildrenProps) {

  const { language, languageList, switchLanguage } = appLanguage();
  const [active, setActive] = React.useState(false);

  const handlerActive = ({ target }: any) => {
    const currentTarget = target;

    setActive(!active);

    if (target.id === 'selected-item') {
      const time = setTimeout(() => {
        document.addEventListener('click', getTarget);
        clearTimeout(time);
      }, 100)
    }

    const getTarget = ({ target }: any) => {
      if (target !== currentTarget) {
        setActive(false);
      }
      document.removeEventListener('click', getTarget)
    }
  }

  return (
    <div className={globalStyles.select + " " + (active ? globalStyles.select_active : " " ) + " " +className}>
      <div className={globalStyles.select__wrapper} onClick={(evt) => handlerActive(evt)} >
        <div className={globalStyles.select__selected__item} id="selected-item">
          <div className={globalStyles.country}>
            <img className={globalStyles.country_flag} src={language.flag_src} />
            <Body size='x5' className={globalStyles.country_name}>{language.name}</Body>
          </div>
          <img src={iconDown} alt="" />
        </div>
        <div className={globalStyles.select__list}>
          {
            languageList.map(item => (
              <div className={globalStyles.select__list__item} onClick={() => switchLanguage(item.unicode)} key={item.unicode}>
                <div className={globalStyles.country}>
                  <img className={globalStyles.country_flag} src={item.flag_src} />
                  <Body size='x5' className={globalStyles.country_name}>{item.name} </Body>
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
