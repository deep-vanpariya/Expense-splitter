import { useState } from 'react'
import { Header } from './components/header'
import { CreateAccount } from './components/loginSignup/createAccount'
import { SignIn } from './components/loginSignup/signInAccount'
import { Footer } from './components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/homepage/home'
import { CreateGroup } from './components/CreateGroup/createGroup'

function App() {

  return <div className='bg-[#FFFCE1] flex flex-col gap-6 justify-between overflow-auto min-h-screen ' >

    <Header />
    <div className='flex grow'>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path='/c reateacc' element={<CreateAccount />} />
          <Route path='/*' element={<HomePage />} />
          <Route path='/creategrp' element={<CreateGroup />} />
        </Routes>
      </BrowserRouter>
    </div>

    <Footer />
  </div >
}

export default App
