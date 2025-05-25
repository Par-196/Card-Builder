import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import AccountLogin from './Pages/AccountLogin/AccountLogin.jsx'


export default function App() {
  return (
    <Routes >
      <Route path="/" element={<MainLayout />} >  
        <Route path="/" element={<MainPage />} /> 
      </Route>
      <Route path="/accountlogin" element={<AccountLogin />} />
    </Routes>
  )
}
