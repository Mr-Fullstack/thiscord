import helpers from '@/helpers';
import { ChildrenProps } from '@/types';
import { DitionaryProps, LanguageContextProps } from '@/types/DitionaryTypes';
import React from 'react'


const ContextLanguage = React.createContext<LanguageContextProps | null>(null);

export default function LanguageProvider({ children }: ChildrenProps) {

  const [language, setLanguage] = React.useState<'pt_br' | 'en_us'>('pt_br')
  const [ditionary, setDitionary] = React.useState<DitionaryProps>(helpers.ditionary.translate[language])

  const t = (word: string) => {
    let translated_word = ditionary[word];
    return translated_word;
  }

  const switchLanguage = (languageName: 'pt_br' | 'en_us') => {
    setLanguage(languageName);
    setDitionary(helpers.ditionary.translate[languageName])
  }

  const getCurrentLanguage = () => {
    return helpers.ditionary.languageList.filter(item => item.unicode === language)[0]
  }

  return (
    <ContextLanguage.Provider value={{
      languageList: helpers.ditionary.languageList,
      language: getCurrentLanguage(),
      ditionary,
      t,
      switchLanguage,
    }}>
      {children}
    </ContextLanguage.Provider>
  )
}

export function appLanguage() {
  const language = React.useContext(ContextLanguage) as LanguageContextProps;
  return language;
}
