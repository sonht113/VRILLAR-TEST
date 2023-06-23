import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Pagination,
  Typography,
} from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_YEAR } from '../gql/query/f1-data';
import { F1 } from '../types/f1.type';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

type IListInfoProps = {
  setYearDefault: Dispatch<SetStateAction<string>>;
  yearDefault: string;
  dataTable?: F1[];
};

const ListInfo: React.FC<IListInfoProps> = ({
  setYearDefault,
  yearDefault,
  dataTable,
}) => {
  const { data: years } = useQuery<{ getAllYear: string[] }>(GET_ALL_YEAR);
  return (
    <>
      <Box display={'flex'} justifyContent={'flex-end'} gap={4}>
        {years?.getAllYear.map((year: string) => (
          <Box
            key={year}
            sx={{
              width: 50,
              height: 50,
              backgroundColor: year === yearDefault ? 'primary.dark' : 'gray',
              cursor: 'pointer',
              borderRadius: 10,
              color: 'white',
              fontSize: 14,
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            onClick={() => setYearDefault(year)}
          >
            {year}
          </Box>
        ))}
      </Box>
      <TableContainer component={Paper} style={{ marginTop: '30px' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>GRAND PRIX</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>DATE</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>WINNER</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>CAR</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>LAPS</TableCell>
              <TableCell align='right' style={{ fontWeight: 'bold' }}>
                TIME
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable?.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align='center'>
                  Not have data
                </TableCell>
              </TableRow>
            )}
            {dataTable?.map((data: F1) => (
              <TableRow
                key={data?.time}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {data?.grandPrix}
                </TableCell>
                <TableCell>{data?.date}</TableCell>
                <TableCell>{data?.winner}</TableCell>
                <TableCell>{data?.car}</TableCell>
                <TableCell>{data?.laps}</TableCell>
                <TableCell align='right'>{data?.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListInfo;
