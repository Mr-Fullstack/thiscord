import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import Home from './landing/pages/home/Home';
import Page404 from './landing/pages/page404/Page404';
import Signin from './landing/pages/signin/Signin';
import Signup from './landing/pages/signup/Signup';
import LanguageProvider from '@/contexts/LanguageProvider';
import { Footer } from '@/components/Footer/Footer';
import { removePageName, setPageName } from './helpers/landing';
import { Landing } from './landing/Landing';

function App() {

  return (
    <LanguageProvider>
      <Routes>
        <Route path='/*' element={<Landing />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App;
