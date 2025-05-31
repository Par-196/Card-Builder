import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FlyerPostProductionServicesTables({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          borderCollapse: 'collapse',
          '& td, & th': {
            border: '1px solid black',
            fontFamily: "'JetBrains Mono', monospace",
            padding: '13px 10px',
          },
          '& th': {
            backgroundColor: '#f5f5f5',
          },
        }}
        aria-label="custom table"
      >
        <TableHead>
          <TableRow
            sx={{
              height: '60px',
              '& td, & th': {
                border: 'none',
              },
            }}
          >
            <TableCell sx={{width: '200', fontSize: '24px' }}>Тираж</TableCell>
            <TableCell width="164" align="right" sx={{ fontSize: '14px' }}>
              5001-10000
            </TableCell>
            <TableCell width="164" align="right" sx={{ fontSize: '14px' }}>
              1001-5000
            </TableCell>
            <TableCell width="164" align="right" sx={{ fontSize: '14px' }}>
              501-1000
            </TableCell>
            <TableCell width="164" align="right" sx={{ fontSize: '14px' }}>
              201-500
            </TableCell>
            <TableCell width="164" align="right" sx={{ fontSize: '14px' }}>
              100-200
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ height: '60px' }}>
              <TableCell align='center' component="th" scope="row" sx={{fontWeight:'800', fontSize: '14px' }}>
                {row.name}
              </TableCell>
              {row.prices.map((price, idx) => (
                <TableCell key={idx} align="right" sx={{ fontSize: '24px' }}>
                  {price.toFixed(2).replace('.', ',')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
