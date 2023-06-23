import React, { useState } from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import { Container, Typography } from '@mui/material';
import { GET_ALL_GRAND, QUERY_DATA } from './gql/query/f1-data';
import Form from './components/Form';
import ListInfo from './components/Table';
import { F1 } from './types/f1.type';

function App() {
  const [yearDefault, setYearDefault] = useState<string>('2023');
  const [query, setQuery] = useState<{
    namePlayer: string;
    lap: string;
    grandSelect: string;
  }>({
    namePlayer: '',
    lap: '',
    grandSelect: '',
  });

  const { data: dataQuery } = useQuery<{
    queryData: F1[];
  }>(QUERY_DATA, {
    variables: {
      year: yearDefault,
      winnerName: query.namePlayer,
      grandPrix: query.grandSelect,
      lap: query.lap,
    },
  });

  const { data: grands } = useQuery<{ getGrandPrixInYear: string[] }>(
    GET_ALL_GRAND,
    {
      variables: {
        year: yearDefault,
      },
    }
  );

  return (
    <div className='App'>
      <Typography
        variant='h3'
        component={'h3'}
        style={{ textTransform: 'uppercase' }}
      >
        {' '}
        vrillar test{' '}
      </Typography>
      <Container>
        <Form
          setQuery={setQuery}
          query={query}
          grands={grands?.getGrandPrixInYear}
        />
        <ListInfo
          setYearDefault={setYearDefault}
          yearDefault={yearDefault}
          dataTable={dataQuery?.queryData}
        />
      </Container>
    </div>
  );
}

export default App;
