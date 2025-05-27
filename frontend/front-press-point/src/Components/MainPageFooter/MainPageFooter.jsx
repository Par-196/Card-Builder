import './MainPageFooter.css'

export default function MainPageFooter() 
{
    return (
        <div className='mainPageFooterFooter'>
            <div className='mainPageFooterOfficeAddresses'>
                <div className='mainPageFooterTitle'>
                    <p>
                        Адреси наших офісів
                    </p>
                </div>
                <div className='mainPageFooterText'>
                    <p className='mainPageFooterFirstAddress'>
                        вул. Богдана Хмельницького, 50
                    </p>
                    <p className='mainPageFooterSecondAddress'>
                        просп. Перемоги, 45
                    </p>
                    <p className='mainPageFooterThirdAddress'>
                        вул. Хрещатик, 22
                    </p>
                </div>
            </div>
            <div className='mainPageFooterContacts'>
                <div className='mainPageFooterEmail'>
                    <div className='mainPageFooterTitle'>
                        <p>
                            Написати 
                        </p>
                    </div>
                    <div className='mainPageFooterText'>
                        <p>
                            presspoint.gmail.com
                        </p>
                    </div>
                </div>
                <div className='mainPageFooterNumber'>
                    <div className='titmainPageFooterTitleel'>
                        <p>
                            Подзвонити 
                        </p>
                    </div>
                    <div className='mainPageFooterText'>
                        <p>
                            +38 012 345 6789
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}