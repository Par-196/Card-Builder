import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';

const orders = [
  {
    id: 1,
    product: 'Листівки',
    format: 'Формат: A5\nОдносторонній кольоровий друк на папері Mondi Color print DNS 120 г/м2',
    quantity: 50,
    price: 3765,
    date: '03.03.2025',
    status: 'Обробка замовлення',
  },
  {
    id: 2,
    product: 'Блокноти',
    format: 'Формат: A4\nБлокнот на пружину',
    quantity: 4,
    price: 11036,
    date: '28.02.2025',
    status: 'Виготовлення',
  },
  {
    id: 3,
    product: 'Флаєри',
    format: 'Формат: 210×100 мм\nОдносторонній друк 210×100 мм на крейдованому папері 120 г/м2',
    quantity: 6000,
    price: 34800,
    date: '25.02.2025',
    status: 'Відправлено',
  },
  {
    id: 4,
    product: 'Постери',
    format: 'Формат: A0\nМатований папір (180 г/м2)',
    quantity: 1,
    price: 6559,
    date: '24.02.2025',
    status: 'Доставлено',
  },
  {
    id: 5,
    product: 'Постери',
    format: 'Формат: A0\nМатований папір (180 г/м2)',
    quantity: 1,
    price: 6559,
    date: '24.02.2025',
    status: 'Доставлено',
  },
];

export default function OrderListDataGrid() {
  const columns = [
    { field: 'id', headerName: 'Номер', width: 120 },
    { field: 'product', headerName: 'Товар', width: 200 },
    {
      field: 'format', headerName: 'Формат замовлення', width: 400,
      renderCell: (params) => (
        <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{params.value}</pre>
      ),
    },
    { field: 'quantity', headerName: 'Кількість', width: 200, align: 'left', headerAlign: 'left' },
    { field: 'price', headerName: 'Ціна', width: 300, align: 'left', headerAlign: 'left',
      renderCell: (params) => (
        <span>
          {params.value !== undefined && params.value !== null
            ? `${params.value.toLocaleString('uk-UA', { minimumFractionDigits: 2 })} ₴`
            : ''}
        </span>
      )
    },
    { field: 'date', headerName: 'Дата', width: 200 },
    { field: 'status', headerName: 'Статус замовлення', width: 200 },
  ];

  return (
    <Stack height="600px" width="100%">
      <DataGrid
        rows={orders}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableRowSelectionOnClick
        getRowHeight={() => 120}
        sx={{
          fontFamily: "'JetBrains Mono', monospace",
          borderColor: 'black',
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: '1px solid black',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid black',
          },
        }}
      />
    </Stack>
  );
}
