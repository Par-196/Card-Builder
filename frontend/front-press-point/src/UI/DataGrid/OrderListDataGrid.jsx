import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';

export default function OrderListDataGrid({ orders }) {

  const itemNamesUk = {
      postcard: 'Листівка',
      booklet: 'Брошура',
      notebook: 'Блокнот',
      businessCard: 'Візитка',
      poster: 'Плакат',
      tag: 'Бірка',
      envelope: 'Конверт',
      flyer: 'Флаєр',
    };
  const statusNamesUk = {
    processing: 'Обробка замовлення',
    inProgress: 'Виготовлення',
    sorting: 'Сортування',
    delivering: 'Відправлення',
    delivered: 'Доставлено',
  };

  const columns = [
    { field: 'id', headerName: 'Номер', width: 80},
    
    {
    field: 'item',
    headerName: 'Товар',
    width: 100,
    renderCell: (params) => {
    const itemKey = params.value;
    const itemName = itemNamesUk[itemKey] || itemKey;
    return itemName.charAt(0).toUpperCase() + itemName.slice(1);
  },
  },
    {
      field: 'description', headerName: 'Формат замовлення', width: 570,
      renderCell: (params) => (
        <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{params.value}</pre>
      ),
    },
    { field: 'amount', headerName: 'Кількість', width: 200, align: 'left', headerAlign: 'left' },
    { field: 'totalPrice', headerName: 'Ціна', width: 200, align: 'left', headerAlign: 'left',
      renderCell: (params) => (
        <span>
          {params.value !== undefined && params.value !== null
            ? `${params.value.toLocaleString('uk-UA', { minimumFractionDigits: 2 })} ₴`
            : ''}
        </span>
      )
    },
    { field: 'creationDate', headerName: 'Дата', width: 300, renderCell: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString('uk-UA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
      } 
    },
  {
    field: 'status',
    headerName: 'Статус замовлення',
    width: 200,
    renderCell: (params) => {
      const statusKey = params.value;
      const statusName = statusNamesUk[statusKey] || statusKey;
      const formattedStatus = statusName.charAt(0).toUpperCase() + statusName.slice(1);
      return <span>{formattedStatus}</span>;
    },
  },
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
