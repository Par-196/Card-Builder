import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import AccountLoginPage from './Pages/AccountLoginPage/AccountLoginPage.jsx'
import AccountRegistrationPage from './Pages/AccountRegistrationPage/AccountRegistrationPage.jsx'
import PersonalAccountPage from './Pages/PersonalAccountPage/PersonalAccountPage.jsx'
import ProductСatalogPage from  './Pages/ProductСatalogPage/ProductСatalogPage.jsx'
import InformationAboutUsPage from './Pages/InformationAboutUsPage/InformationAboutUsPage.jsx'
import ProductPage from './Pages/ProductPage/ProductPage.jsx'
import ProductBuilderPostcardPage from './pages/productBuilderPages/productBuilderPostcardPage/ProductBuilderPostcardPage.jsx'
import ProductBuilderBookletPage from './pages/productBuilderPages/productBuilderBookletPage/ProductBuilderBookletPage.jsx'
import ProductBuilderNotepadPage from './pages/productBuilderPages/productBuilderNotepadPage/ProductBuilderNotepadPage.jsx'
import ProductBuilderBusinessCardPage from './pages/productBuilderPages/productBuilderBusinessCardPage/ProductBuilderBusinessCardPage.jsx'
import ProductBuilderPosterPage from './pages/productBuilderPages/productBuilderPosterPage/ProductBuilderPosterPage.jsx'
import ProductBuilderTagPage from './pages/productBuilderPages/productBuilderTagPage/ProductBuilderTagPage.jsx'
import ProductBuilderEnvelopePage from './pages/productBuilderPages/productBuilderEnvelopePage/ProductBuilderEnvelopePage.jsx'
import ProductBuilderFlyerPage from './pages/productBuilderPages/productBuilderFlyerPage/ProductBuilderFlyerPage.jsx'
import AuthVerify from './services/authService/authService.js'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path='/account' element={<PersonalAccountPage /> }/>
          <Route path='/catalog' element={<ProductСatalogPage />}/>
          <Route path="/about" element={<InformationAboutUsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/postcardbuilder" element={<ProductBuilderPostcardPage />} />
          <Route path="/bookletbuilder" element={<ProductBuilderBookletPage />} />
          <Route path="/notepadbuilder" element={<ProductBuilderNotepadPage />} />
          <Route path="/businesscardbuilder" element={<ProductBuilderBusinessCardPage />} />
          <Route path="/posterbuilder" element={<ProductBuilderPosterPage />} />
          <Route path="/tagbuilder" element={<ProductBuilderTagPage />} />
          <Route path="/envelopebuilder" element={<ProductBuilderEnvelopePage />} />
          <Route path="/flyerbuilder" element={<ProductBuilderFlyerPage />} />
        </Route>
        <Route path="/login" element={<AccountLoginPage />} />
        <Route path="/registration" element={<AccountRegistrationPage />} />
      </Routes>
  )
}
// Postcard
// Booklet
// Notepad
// Business Card
// Poster
// Tag
// Envelope
// Flyer