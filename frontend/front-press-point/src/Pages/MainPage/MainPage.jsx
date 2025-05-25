import MainPageContent from "../../Components/MainPageContent/MainPageContent"
import MainPageFooter from "../../Components/MainPageFooter/MainPageFooter"
import './MainPage.css'

export default function MainPage() 
{
    return(
        <div className="mainPageComponents">
            <div className="mainPageContent">
                <MainPageContent />
            </div>
            <div className="mainPageFooter">
                <MainPageFooter />
            </div>
        </div>
    )
}
