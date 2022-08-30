import { removePageName, setPageName } from '@/helpers/landing'
import React from 'react'
import { Route, Routes, useMatch, useParams, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Page404 from './pages/page404/Page404'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'

export function Landing() {
  const navigate = useNavigate();
  const { pathname } = window.location;
  const page = pathname === '/' ? 'home' : pathname.replace('/', '');
  React.useEffect(() => {
    const handlerBack = (evt: any) => {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        navigate('/')
      }
    }
    document.addEventListener('keydown', handlerBack)
    return (() => document.removeEventListener('keypress', handlerBack))
  })

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}