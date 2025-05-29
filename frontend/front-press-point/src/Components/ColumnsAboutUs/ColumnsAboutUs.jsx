import './ColumnsAboutUs.css'

export default function ColumnsAboutUs()
{
  return (
    <div className='columns-about-us-container'>
      <div className='columns-about-us-fisrt-container'>
          <div className='columns-about-us-title'>
            <p>
              ЧОМУ САМЕ МИ ?
            </p>
          </div>
          <div className='columns-about-us-text'>
            <p>
              1. Два варіанти замовлення – створюйте власний дизайн або загружайте готовий. <br />
              2. Швидкий друк – виконуємо замовлення навіть у терміновому режимі. <br />
              3. Висока якість – сучасне обладнання та контроль якості на всіх етапах. <br />
              4. Гнучкі умови співпраці – працюємо як з індивідуальними замовниками, так і з бізнесом. <br />
              5. Доступна доставка – отримуйте продукцію в будь-якій точці країни. <br />
            </p>
          </div>
          <div className='columns-about-us-box'>
            {[...Array(13)].map((_, index) => (
              <hr key={index} className='columns-about-us-black-line' />
            ))}
          </div>
      </div>
      <div className='columns-about-us-second-container'>
          <div className='columns-about-us-title'>
            <p>
              ПРО НАС
            </p>
          </div>
          <div className='columns-about-us-text'>
            <p>
              Ми – інноваційний онлайн-сервіс для створення та замовлення поліграфічної продукції. Наш сайт дозволяє як самостійно розробити унікальний дизайн у зручному редакторі, так і дозволить вам завантажити ваш. <br />Ми не просто друкуємо макети – ми допомагаємо вам створювати ідеальну продукцію, підбирати найкращі матеріали та гарантуємо якість на кожному етапі.
            </p>
          </div>
          <div className='columns-about-us-box'>
            {[...Array(13)].map((_, index) => (
              <hr key={index} className='columns-about-us-black-line' />
            ))}
          </div>
      </div>
      <div className='columns-about-us-third-container'>
          <div className='columns-about-us-title'>
            <p>
              ТЕХНОЛОГІЇ ТА МАТЕРІАЛИ
            </p>
          </div>
          <div className='columns-about-us-text'>
            <p>
              У нашому арсеналі: <br />
              1. Листовий та рулонний офсетний друк <br />
              2. Цифровий друк для малих тиражів <br />
              3. Широкоформатний друк для банерів і постерів <br />
              4. Друк на дизайнерських матеріалах, пластику, текстилі <br />
              5. Додаткові обробки: ламінування, вибірковий лак, тиснення, фольгування <br />
            </p>
          </div>
          <div className='columns-about-us-box'>
            {[...Array(13)].map((_, index) => (
              <hr key={index} className='columns-about-us-black-line' />
            ))}
          </div>
      </div>
    </div>
  )
}
