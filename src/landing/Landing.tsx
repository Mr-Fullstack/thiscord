import { removePageName, setPageName } from '@/helpers/landing'
import React from 'react'
import { Route, Routes, useMatch, useParams } from 'react-router-dom'
import Home from './pages/home/Home'
import Page404 from './pages/page404/Page404'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'


export function Landing() {


  
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    )
}