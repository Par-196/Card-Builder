import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header.jsx'
import MainPageFooter from './Components/MainPageFooter/MainPageFooter.jsx'
import MainPageContent from './Components/MainPageContent/MainPageContent.jsx'


function App() {
  return (
    <div className='container'>
      <Header />
      <MainPageContent />
      <MainPageFooter />
    </div>
  )
}


export default App