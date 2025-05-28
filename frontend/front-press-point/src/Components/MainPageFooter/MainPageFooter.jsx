import './MainPageFooter.css'

export default function MainPageFooter() 
{
    return (
        <div className='main-page-footer'>
            <div className='main-page-footer-office-addresses'>
                <div className='main-page-footer-title'>
                    <p>
                        Адреси наших офісів
                    </p>
                </div>
                <div className='main-page-footer-text'>
                    <p className='main-page-footer-first-address'>
                        вул. Богдана Хмельницького, 50
                    </p>
                    <p className='main-page-footer-second-address'>
                        просп. Перемоги, 45
                    </p>
                    <p className='main-page-footer-third-address'>
                        вул. Хрещатик, 22
                    </p>
                </div>
            </div>
            <div className='main-page-footer-contacts'>
                <div className='main-page-footer-email'>
                    <div className='main-page-footer-title'>
                        <p>
                            Написати 
                        </p>
                    </div>
                    <div className='main-page-footer-text'>
                        <p>
                            presspoint.gmail.com
                        </p>
                    </div>
                </div>
                <div className='main-page-footer-number'>
                    <div className='main-page-footer-title'>
                        <p>
                            Подзвонити 
                        </p>
                    </div>
                    <div className='main-page-footer-text'>
                        <p>
                            +38 012 345 6789
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}