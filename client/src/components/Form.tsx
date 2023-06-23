import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useDebounce from '../hook/useDeounce';

type IFormProps = {
  setQuery: React.Dispatch<
    React.SetStateAction<{
      namePlayer: string;
      lap: string;
      grandSelect: string;
    }>
  >;
  query: {
    namePlayer: string;
    lap: string;
    grandSelect: string;
  };
  grands?: string[];
};

const Form: React.FC<IFormProps> = ({ setQuery, query, grands }) => {
  const [valueSearch, setValueSearch] = useState<string>('');

  const resultDebounce = useDebounce(valueSearch, 1000);

  useEffect(() => {
    setQuery({ ...query, namePlayer: resultDebounce });
  }, [resultDebounce]);
  return (
    <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
      <TextField
        id='search'
        size='small'
        label='Search'
        placeholder='Enter the name player'
        variant='outlined'
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
      />
      <FormControl>
        <InputLabel id='demo-simple-select-label'>Grands</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={query.grandSelect === '' ? 'All' : query.grandSelect}
          label='Grands'
          onChange={(e) => {
            if (e.target.value === 'All') {
              setQuery({ ...query, grandSelect: '' });
            } else {
              setQuery({ ...query, grandSelect: String(e.target.value) });
            }
          }}
        >
          <MenuItem value={'All'}>All</MenuItem>
          {grands?.map((grand) => (
            <MenuItem key={grand} value={grand}>
              {grand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Form;
