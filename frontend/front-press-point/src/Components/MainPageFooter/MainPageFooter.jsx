import './MainPageFooter.css'

export default function MainPageFooter() 
{
    return (
        <div className='footer'>
            <div className='officeAddresses'>
                <div className='titel'>
                    <p>
                        Адреси наших офісів
                    </p>
                </div>
                <div className='text'>
                    <p className='firstAddress'>
                        вул. Богдана Хмельницького, 50
                    </p>
                    <p className='secondAddress'>
                        просп. Перемоги, 45
                    </p>
                    <p className='thirdAddress'>
                        вул. Хрещатик, 22
                    </p>
                </div>
            </div>
            <div className='contacts'>
                <div className='email'>
                    <div className='titel'>
                        <p>
                            Написати 
                        </p>
                    </div>
                    <div className='text'>
                        <p>
                            presspoint.gmail.com
                        </p>
                    </div>
                </div>
                <div className='number'>
                    <div className='titel'>
                        <p>
                            Подзвонити 
                        </p>
                    </div>
                    <div className='text'>
                        <p>
                            +38 068 513 7214
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}