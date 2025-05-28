import MainPageContent from "../../Components/MainPageContent/MainPageContent"
import MainPageFooter from "../../Components/MainPageFooter/MainPageFooter"
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
