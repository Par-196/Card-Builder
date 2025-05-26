import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import AccountLoginPage from './Pages/AccountLoginPage/AccountLoginPage.jsx'
import AccountRegistrationPage from './Pages/AccountRegistrationPage/AccountRegistrationPage.jsx'
import PersonalAccountPage from './Pages/PersonalAccountPage/PersonalAccountPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path='/personalaccountpage' element={<PersonalAccountPage/> }/>
      </Route>
      <Route path="/accountloginpage" element={<AccountLoginPage />} />
      <Route path='/accountregistrationpage' element={<AccountRegistrationPage />} />
    </Routes>
  )
}
