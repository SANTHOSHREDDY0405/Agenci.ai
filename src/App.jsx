import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TrustedBy from './TrustedBy'
import Hero from './components/Hero'
import Services from './components/Services'


const App = () => {

  const [theme, setTheme] = useState('dark')


  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
    </div>
  )
}

export default App