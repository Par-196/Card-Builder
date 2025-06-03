import './ProductPostPressServices.css'
import { useLocation } from 'react-router-dom';
import PostcardPostProductionServicesTables from '../../ui/tables/PostcardPostProductionServicesTables';
import BookletTable from '../../ui/tables/BookletTable';
import NotepadTable from '../../ui/tables/NotepadTable';
import BusinessCardTable from '../../ui/tables/BusinessCardTable';
import PosterTable from '../../ui/tables/PosterTable';
import TagPostProductionServicesTables from '../../ui/tables/TagPostProductionServicesTables';
import EnvelopeTable from '../../ui/tables/EnvelopeTable';
import FlyerPostProductionServicesTables from '../../ui/tables/FlyerPostProductionServicesTables';

export default function ProductPostPressServices()
{
    const tableProductPostPressServicesData = [
    {
      title: 'Листівка',
      rows: [
        {
          format: 'Форматом А5',
          name: 'Глянцева ламінація ',
          prices: [0.70, 1.00, 1.60, 4.00],
        },
        {
          format: 'Форматом А5',
          name: 'Матова ламінація ',
          prices: [0.80, 1.20, 1.80, 4.50],
        },
        {
          format: 'Форматом А6',
          name: 'Глянцева ламінація ',
          prices: [0.50, 0.80, 1.20, 3.50],
        },
        {
          format: 'Форматом А6',
          name: 'Матова ламінація ',
          prices: [0.60, 0.90, 1.40, 4.00],
        },
      ],
    },
    {
        title: 'Буклет',
        rows: [
        {
          format: 'Формат А4',
          name: 'Глянцева ламінація',
          prices: [0.95, 1.30, 1.80, 2.50, 3.60, 4.50, 6.00, 8.50],
        },
        {
          format: 'Формат А4',
          name: 'Матова ламінація',
          prices: [1.10, 1.50, 2.10, 2.90, 4.20, 5.30, 6.80, 9.30],
        }
        ]
        
    },
    {
        title: 'Блокнот',
        rows: [
        {
          format: 'Блокнот А4 формату',
          name: 'Закладка (стрічка)',
          prices: [8.00, 9.00, 10.00, 12.00, 15.00, 18.00],
        },
        {
          format: 'Блокнот А4 формату',
          name: 'Скріплення на пружину',
          prices: [18.00, 19.00, 20.00, 22.00, 25.00, 30.00],
        },
        {
          format: 'Блокнот А5 формату',
          name: 'Закладка (стрічка)',
          prices: [6.00, 7.00, 8.00, 10.00, 12.00, 15.00],
        },
        {
          format: 'Блокнот А5 формату',
          name: 'Скріплення на пружину',
          prices: [15.00, 16.00, 17.00, 18.00, 20.00, 25.00],
        },
        {
          format: 'Блокнот А6 формату',
          name: 'Закладка (стрічка)',
          prices: [4.00, 5.00, 6.00, 7.00, 9.00, 12.00],
        },
        {
          format: 'Блокнот А6 формату',
          name: 'Скріплення на пружину',
          prices: [12.00, 13.00, 14.00, 15.00, 17.00, 20.00],
        },
        ]
    },
    {
        title: 'Візитка',
        rows: [
        {
          format: 'Стандартний формат',
          name: 'Матова ламінація',
          prices: [28.00, 33.00, 39.00, 48.00, 60.00],
        },
        {
          format: 'Стандартний формат',
          name: 'Глянцева ламінація',
          prices: [26.00, 30.00, 36.00, 45.00, 55.00],
        },
        {
          format: 'Євро формат',
          name: 'Матова ламінація',
          prices: [30.00, 35.00, 41.00, 50.00, 62.00],
        },
        {
          format: 'Євро формат',
          name: 'Глянцева ламінація',
          prices: [27.00, 32.00, 38.00, 46.00, 57.00],
        },
        ]
    },
    {
        title: 'Постер',
        rows: [
        {
          format: 'Формат А0',
          name: 'Глянцева ламінація',
          prices: [70.00, 80.00, 90.00],
        },
        {
          format: 'Формат А0',
          name: 'Матова ламінація',
          prices: [80.00, 90.00, 100.00],
        },
        {
          format: 'Формат A1',
          name: 'Глянцева ламінація',
          prices: [50.00, 55.00, 60.00],
        },
        {
          format: 'Формат A1',
          name: 'Матова ламінація',
          prices: [60.00, 65.00, 70.00],
        },
        {
          format: 'Формат A2',
          name: 'Глянцева ламінація',
          prices: [30.00, 35.00, 40.00],
        },
        {
          format: 'Формат A2',
          name: 'Матова ламінація',
          prices: [35.00, 40.00, 45.00],
        },
        ]
    },
    {
        title: 'Бірка',
        rows: [
        {
          format: 'Формат Євро',
          name: 'Матова ламінація',
          prices: [0.65, 0.75, 0.90, 1.20, 1.50],
        },
        {
          format: 'Формат Євро',
          name: 'Глянцева ламінація',
          prices: [0.70, 2.50, 0.95, 1.30, 1.60],
        },
        {
          format: 'Формат Стандарт',
          name: 'Матова ламінація',
          prices: [0.60, 0.70, 0.85, 1.10, 1.40],
        },
        {
          format: 'Формат Стандарт',
          name: 'Глянцева ламінація',
          prices: [0.65, 0.75, 0.90, 1.20, 1.50],
        },
        ]
    },
    {
        title: 'Флаєр',
        rows: [
        {
          format: 'Формат Стандарт 210×100',
          name: 'Глянцева ламінація',
          prices: [1.30, 1.70, 2.10, 2.80, 3.50],
        },
        {
          format: 'Формат Стандарт 210×100',
          name: 'Матова ламінація',
          prices: [1.50, 1.90, 2.30, 3.00, 3.80],
        },
        ]
    }
  ];
    const location = useLocation();

    const selectedTitle  = location.state;

    const selectedProduct = tableProductPostPressServicesData.find(item => item.title === selectedTitle);


    if (!selectedProduct) {
        return <p>Продукт не знайдено</p>;
    }

    const TableComponent = {
        'Листівка': PostcardPostProductionServicesTables,
        'Буклет': BookletTable,
        'Блокнот': NotepadTable,
        'Візитка': BusinessCardTable,
        'Постер': PosterTable,
        'Бірка': TagPostProductionServicesTables,
        'Конверт': EnvelopeTable,
        'Флаєр': FlyerPostProductionServicesTables,
    }[selectedProduct.title] || PostcardPriceTable;

    const groupedFormats = selectedProduct.rows.reduce((acc, row) => {
        if (!acc[row.format]) acc[row.format] = [];
        acc[row.format].push(row);
        return acc;
    }, {});

    return (
        <div className='product-post-press-services-container'>
        <div className='product-post-press-services-title'>
            <p>Постдрукарські послуги</p>
        </div>
        {Object.entries(groupedFormats).map(([format, rows]) => (
            <div key={format} className='product-post-press-services-table-container'>
            <div className='product-post-press-services-table-title'>
                <p>{format}</p>
            </div>
            <div className='product-post-press-services-table-box'>
                <TableComponent rows={rows} />
            </div>
            </div>
        ))}
        <div className='product-post-press-services-space'></div>
        </div>
    );
}
