import React from 'react'
import { ChildrenProps } from '@/types';
import { appLanguage } from '@/contexts/LanguageProvider';
import iconDown from '@/globals/icons/keyboard_arrow_down.svg';
import style from '@/sass/main.module.scss';

interface SelectOptionProps extends ChildrenProps {
  data: Array<string>;
  placeholder: string;
  type: string;
  name: string;
}

export function SelectOption({ name, type, placeholder, data }: SelectOptionProps) {

  const { t, language } = appLanguage();
  const optionRef: any = React.useRef();
  const [toogle, setToggle] = React.useState(false);
  const [itemSelected, setItemSelected] = React.useState("")
  const [dataList, setDatalist] = React.useState(data)
  const [dataOld, setDataOld] = React.useState(data)
  const width = window.innerWidth;
  const changeSelectedItem = ({ target }: any) => {
    setItemSelected(target.innerText)
  }

  const changeValueItem = (evt: any) => {

    if (optionRef.current === evt.target) {
      setItemSelected(evt.target.value)
      if (evt.target.value.length <= 0) {
        setDatalist(dataOld)
      }
    }
    if (itemSelected !== ' ') {
      setDatalist(getOptionsMatch(itemSelected.toLocaleLowerCase()))
    } else {
      setDatalist(dataOld)
    }
  }

  const getOptionsMatch = (s: string) => {
    const p: any = Array.from(s).reduce((a, v, i) => `${a}[^${s.substring(i)}]*?${v}`, '');
    const re = RegExp(p, 'gmi');
    return dataOld.filter(v => v.toLowerCase().match(re))

  };

  const handlerToggle = ({ target }: any) => {
    if (optionRef.current === target) {
      setToggle(oldstate => !oldstate)
    }
    else {
      if (dataList) {
        setToggle(false)
        setDatalist(dataOld)
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener('click', handlerToggle)
    return (() => window.removeEventListener('click', handlerToggle))
  })

  return (
    <div className={style.select_option + ' ' + (toogle ? style.active : '')}  >
      <div className={style.select_option_main}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className={style.select_option_selected}
          value={t(itemSelected) ? t(itemSelected) : itemSelected}
          onChange={changeValueItem}
          onKeyUp={changeValueItem}
          ref={optionRef}
          autoComplete="off" readOnly={(width <= 769)} />
        <div className={style.select_option_main_icon}>
          <img src={iconDown} alt="" />
        </div>
      </div>
      {dataList.length >= 1 &&
        <div className={style.select_option_list + ' ' + (toogle ? style.visible : '')}>
          <ul className={style.select_option_list_wrapper}>
            {
              dataList.map((item, index) => (
                <li key={item + index} className={style.select_option_list_item} onClick={changeSelectedItem}> {t(item) ? t(item) : item} </li>
              ))
            }
          </ul>
        </div>
      }

    </div>
  )
}
