import MainPageContent from "../../components/mainPageContent/MainPageContent"
import MainPageFooter from "../../components/mainPageFooter/MainPageFooter"
import './MainPage.css'

export default function MainPage() 
{
    return(
        <div className="main-page-components">
            <div className="main-page-content">
                <MainPageContent />
            </div>
            <div>
                <MainPageFooter />
            </div>
        </div>
    )
}
