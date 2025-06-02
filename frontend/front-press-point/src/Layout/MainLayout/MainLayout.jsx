import Header from '../../components/header/Header.jsx'
import {Outlet} from 'react-router-dom'
import './MainLayout.css'

export default function MainLayout()
{
    return (
        <div className='main-layout-page'>
            <Header /> 
            <main>
                <Outlet />
            </main>
        </div>
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