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
    <div className='order-statuses-container'>
      <div className='order-statuses-container-title'>
        <p>Статуси замовлення</p>
      </div>

      <div className='order-statuses-box'>
        {orderStatuses.map((status, index) => (
          <div className='order-statuses-item' key={index}>
            <div className='order-statuses-box-title'>
              <p>{status.title}</p>
            </div>
            <div className='order-statuses-box-content'>
              <p>{status.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
