import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import Home from './landing/pages/home/Home';
import Page404 from './landing/pages/page404/Page404';
import Signin from './landing/pages/signin/Signin';
import Signup from './landing/pages/signup/Signup';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </React.Fragment>

  )
}

export default App;
