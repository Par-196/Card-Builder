import './ProductPrice.css';
import { useLocation } from 'react-router-dom';
import PostcardPriceTable from '../../ui/tables/PostcardPriceTable';
import BookletTable from '../../ui/tables/BookletTable';
import NotepadTable from '../../ui/tables/NotepadTable';
import BusinessCardTable from '../../ui/tables/BusinessCardTable';
import PosterTable from '../../ui/tables/PosterTable';
import TagPriceTable from '../../ui/tables/TagPriceTable';
import EnvelopeTable from '../../ui/tables/EnvelopeTable';
import FlyerPriceTable from '../../ui/tables/FlyerPriceTable';

export default function ProductPrice() {
  const tableProductPriceData = [
    {
      title: 'Листівка',
      rows: [
        {
          format: 'Друк листівок форматом А5 на папері',
          name: 'Односторонній кольоровий друк на папері Mondi Color print DNS 120 г/м²',
          prices: [6.80, 12.40, 19.90, 75.30],
        },
        {
          format: 'Друк листівок форматом А5 на папері',
          name: 'Односторонній кольоровий друк на папері Mondi Color print DNS 160 г/м²',
          prices: [7.50, 13.50, 21.40, 83.70],
        },
        {
          format: 'Друк листівок форматом А5 на папері',
          name: 'Двосторонній кольоровий друк на папері Mondi Color print DNS 120 г/м²',
          prices: [13.60, 19.80, 32.10, 128.90],
        },
        {
          format: 'Друк листівок форматом А5 на папері',
          name: 'Двосторонній кольоровий друк на папері Mondi Color print DNS 160 г/м²',
          prices: [14.40, 21.30, 34.50, 134.20],
        },
        {
          format: 'Друк листівок форматом А6 на папері',
          name: 'Односторонній кольоровий друк на папері Mondi Color print DNS 120 г/м²',
          prices: [4.50, 9.80, 14.30, 60.50],
        },
        {
          format: 'Друк листівок форматом А6 на папері',
          name: 'Односторонній кольоровий друк на папері Mondi Color print DNS 160 г/м²',
          prices: [5.20, 11.20, 16.00, 65.90],
        },
        {
          format: 'Друк листівок форматом А6 на папері',
          name: 'Двосторонній кольоровий друк на папері Mondi Color print DNS 120 г/м²',
          prices: [7.10, 14.80, 22.90, 103.40],
        },
        {
          format: 'Друк листівок форматом А6 на папері',
          name: 'Двосторонній кольоровий друк на папері Mondi Color print DNS 160 г/м²',
          prices: [7.90, 16.20, 25.30, 109.80],
        },
      ],
    },
    {
        title: 'Буклет',
        rows: [
        {
          format: 'Буклет в розвороті А4 формату на папері',
          name: 'Буклет з 1 згином',
          prices: [18.75, 27.40, 32.85, 45.10, 50.20, 66.35, 73.90, 149.80],
        },
        {
          format: 'Буклет в розвороті А4 формату на папері',
          name: 'Буклет з 2 згинами',
          prices: [20.30, 29.90, 35.60, 47.80, 54.70, 69.40, 78.50, 155.30],
        }
        ]
        
    },
    {
        title: 'Блокнот',
        rows: [
        {
          format: 'Блокнот А4 формату',
          name: 'Блокнот А4 формату на 320 сторінок  ',
          prices: [210.50, 220.80, 235.30, 250.40, 275.90, 320.50],
        },
        {
          format: 'Блокнот А5 формату',
          name: 'Блокнот А5 формату на 320 сторінок  ',
          prices: [165.40, 175.90, 189.60, 200.30, 225.80, 270.40],
        },
        {
          format: 'Блокнот А6 формату',
          name: 'Блокнот А6 формату на 320 сторінок  ',
          prices: [95.20, 105.30, 118.90, 130.50, 150.80, 185.60],
        },
        ]
    },
    {
        title: 'Візитка',
        rows: [
        {
          format: 'Візитівки односторонні',
          name: 'Стандартний формат - 90х50 мм',
          prices: [90.00, 100.00, 115.00, 145.00, 180.00],
        },
        {
          format: 'Візитівки односторонні',
          name: 'Євро формат - 85х55 мм',
          prices: [92.00, 102.00, 117.00, 147.00, 182.00],
        },
        {
          format: 'Візитівки двосторонні',
          name: 'Стандартний формат - 90х50 мм',
          prices: [100.00, 110.30, 125.00, 155.80, 190.00],
        },
        {
          format: 'Візитівки двосторонні',
          name: 'Євро формат - 85х55 мм',
          prices: [105.00, 115.00, 130.00, 160.00, 195.00],
        },
        ]
    },
    {
        title: 'Постер',
        rows: [
        {
          format: 'Формат А0',
          name: 'Крейдований папір 200 г/м²',
          prices: [470.00, 495.00, 520.00],
        },
        {
          format: 'Формат А0',
          name: 'Фотопапір 200 г/м²',
          prices: [740.00, 760.00, 780.00],
        },
        {
          format: 'Формат A1',
          name: 'Крейдований папір 200 г/м²',
          prices: [340.00, 360.00, 380.00],
        },
        {
          format: 'Формат A1',
          name: 'Фотопапір 200 г/м²',
          prices: [420.00, 440.00, 460.00],
        },
        {
          format: 'Формат A2',
          name: 'Крейдований папір 200 г/м²',
          prices: [160.00, 175.00, 190.00],
        },
        {
          format: 'Формат A2',
          name: 'Фотопапір 200 г/м²',
          prices: [250.00, 260.00, 270.00],
        },
        ]
    },
    {
        title: 'Бірка',
        rows: [
        {
          format: 'Формат Євро',
          name: 'Кольоровий друк з однієї сторони на крейдованому папері 250 г/м²',
          prices: [1.50, 1.80, 2.30, 2.80, 3.50],
        },
        {
          format: 'Формат Євро',
          name: 'Кольоровий друк з двох сторін на крейдованому папері 250 г/м²',
          prices: [2.10, 2.50, 3.00, 3.70, 4.60],
        },
        {
          format: 'Формат Стандарт',
          name: 'Кольоровий друк з однієї сторони на крейдованому папері 250 г/м²',
          prices: [1.30, 1.60, 2.00, 2.50, 3.20],
        },
        {
          format: 'Формат Стандарт',
          name: 'Кольоровий друк з двох сторін на крейдованому папері 250 г/м²',
          prices: [1.90, 2.30, 2.80, 3.40, 4.20],
        },
        ]
    },
    {
        title: 'Конверт',
        rows: [
        {
          format: 'Формат С6 114 × 162',
          name: 'Офсетний папір — 100 г/м²',
          prices: [20.00, 30.00, 40.00, 50.00],
        },
        {
          format: 'Формат Євро  110 × 220',
          name: 'Офсетний папір — 100 г/м²',
          prices: [50.00, 60.00, 70.00, 80.00],
        },
        ]
    },
    {
        title: 'Флаєр',
        rows: [
        {
          format: 'Формат Стандарт 210×100',
          name: 'Кольоровий друк з однієї сторони на крейдованому папері 350 г/м²',
          prices: [4.20, 6.20, 8.30, 10.00, 12.00],
        },
        {
          format: 'Формат Стандарт 210×100',
          name: 'Кольоровий друк з двох сторін на крейдованому папері 350 г/м²',
          prices: [4.58, 6.87, 9.30, 12.00, 13.00],
        },
        ]
    }
  ];
  
  const location = useLocation();

  const selectedTitle  = location.state;

  const selectedProduct = tableProductPriceData.find(item => item.title === selectedTitle);


  if (!selectedProduct) {
    return <p>Продукт не знайдено</p>;
  }

  const TableComponent = {
    'Листівка': PostcardPriceTable,
    'Буклет': BookletTable,
    'Блокнот': NotepadTable,
    'Візитка': BusinessCardTable,
    'Постер': PosterTable,
    'Бірка': TagPriceTable,
    'Конверт': EnvelopeTable,
    'Флаєр': FlyerPriceTable,
  }[selectedProduct.title] || PostcardPriceTable;

  const groupedFormats = selectedProduct.rows.reduce((acc, row) => {
    if (!acc[row.format]) acc[row.format] = [];
    acc[row.format].push(row);
    return acc;
  }, {});

  return (
    <div className='product-price-container'>
      <div className='product-price-title'>
        <p>Ціна</p>
      </div>
      {Object.entries(groupedFormats).map(([format, rows]) => (
        <div key={format} className='product-price-table-container'>
          <div className='product-price-table-title'>
            <p>{format}</p>
          </div>
          <div className='product-price-table-box'>
            <TableComponent  rows={rows} />
          </div>
        </div>
      ))}
    </div>
  );
}
