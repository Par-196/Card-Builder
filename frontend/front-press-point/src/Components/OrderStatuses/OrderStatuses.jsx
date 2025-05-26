import './OrderStatuses.css'

export default function OrderStatuses() {
  const orderStatuses = [
    {title: '1.Обробка замовлення', description: 'Отримання замовлення, перевірка макетів'},
    {title: '2.Виготовлення', description: 'друк, нарізка, ламінування або інші виробничі процеси'},
    {title: '3.Сортування', description: 'перевірка якості, комплектування всіх частин замовлення'},
    {title: '4.Відправлення', description: 'передача замовлення в кур`єрську службу або підготовка до самовивозу'},
    {title: '5.Доставлено', description: 'клієнт отримав посилку, замовлення завершено'}
  ];

  return (
    <div className='orderStatusesContainer'>
      <div className='orderStatusesContainerTitle'>
        <p>Статуси замовлення</p>
      </div>

      <div className='orderStatusesBox'>
        {orderStatuses.map((status, index) => (
          <div className='orderStatusesItem' key={index}>
            <div className='orderStatusesBoxTitle'>
              <p>{status.title}</p>
            </div>
            <div className='orderStatusesBoxContent'>
              <p>{status.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
