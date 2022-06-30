import en_us_flag from '@/globals/images/flag_en_us.svg';
import pt_br_flag from '@/globals/images/flag_pt_br.svg';
import { LanguageProps, TranslateProps } from '@/types/DitionaryTypes';

const en_us_ditionary = {
  hero_message: 'The best and cutest app to start a discussion ;)',
  Resources: 'Resources',
  Company: 'Company',
  Policy: 'Policy',
  Support: 'Support',
  About: 'About',
  Terms: 'Terms',
  Blog: 'Blog',
  Jobs: 'Jobs',
  Privacy: 'Privacy',
  Developers: 'Developers',
  Brand: 'Brand'
}

const pt_br_ditionary = {
  hero_message: 'O melhor e mais fofo aplicativo para iniciar uma discussão ;)',
  Resources: 'Recursos',
  Company: 'Empresa',
  Policy: 'Politica',
  Support: 'Suporte',
  About: 'Sobre',
  Terms: 'Termos',
  Blog: 'Blog',
  Jobs: 'Trabalho',
  Privacy: 'Privacidade',
  Developers: 'Desenvolvedores',
  Brand: 'Marca',
}



const translate: TranslateProps = {
  pt_br: pt_br_ditionary,
  en_us: en_us_ditionary
}

const pt_br: LanguageProps = {
  name: 'Português, BRA',
  unicode: 'pt_br',
  flag_src: pt_br_flag
}

const en_us: LanguageProps = {
  name: 'English, USA',
  unicode: 'en_us',
  flag_src: en_us_flag
}

const languageList = [pt_br, en_us]

export default {
  translate,
  languageList
}