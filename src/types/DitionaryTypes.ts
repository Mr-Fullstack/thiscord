import { ObjectKeyFindArray } from ".";

export interface TranslateProps {
  pt_br: TranslateLanguageProps;
  en_us: TranslateLanguageProps;
}
export interface LanguageProps {
  name: string,
  unicode: 'pt_br' | 'en_us';
  flag_src: string
}
export interface LanguageContextProps {
  language: LanguageProps;
  ditionary: DitionaryProps;
  t: (word: string) => string;
  languageList: Array<LanguageProps>;
  switchLanguage: (language: 'pt_br' | 'en_us') => void;
}

export interface DitionaryProps extends ObjectKeyFindArray { }
export interface TranslateLanguageProps extends ObjectKeyFindArray { }