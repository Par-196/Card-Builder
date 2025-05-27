import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import AccountLoginPage from './Pages/AccountLoginPage/AccountLoginPage.jsx'
import AccountRegistrationPage from './Pages/AccountRegistrationPage/AccountRegistrationPage.jsx'
import PersonalAccountPage from './Pages/PersonalAccountPage/PersonalAccountPage.jsx'
import AuthVerify from './services/authService/authService.js'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path='/account' element={<PersonalAccountPage/> }/>
        </Route>
        <Route path="/login" element={<AccountLoginPage />} />
        <Route path='/registration' element={<AccountRegistrationPage />} />
      </Routes>
  )
}
