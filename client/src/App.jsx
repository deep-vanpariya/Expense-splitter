import { useState } from 'react'
import { Header } from './components/header'
import { CreateAccount } from './components/loginSignup/createAccount'
import { SignIn } from './components/loginSignup/signInAccount' 
import { Footer } from './components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return <div className='bg-[#FFFCE1] flex flex-col gap-6 justify-between overflow-auto min-h-screen'>

    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/createacc' element={<CreateAccount />} />

        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>

    <Footer />
  </div >
}

export default App
