import { useQuery } from '@apollo/client';
import * as Plot from '@observablehq/plot';
import React, { useEffect, useRef, useState } from 'react';
import {
  QUERY_ALL_DRIVER,
  QUERY_DRIVER_FOR_GRAPHIC,
} from '../gql/query/driver';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Graphic() {
  const [driverSelect, setDriverSelect] = useState<string>('');
  const containerRef = useRef<HTMLInputElement>(null);
  const { data } = useQuery<{
    queryDriverDataForGraphic: {
      year: string;
      driver: string;
      position: string;
    }[];
  }>(QUERY_DRIVER_FOR_GRAPHIC, {
    variables: {
      driverName: driverSelect,
    },
  });

  const { data: allDriver } = useQuery<{
    queryAllDriver: string[];
  }>(QUERY_ALL_DRIVER);

  useEffect(() => {
    if (data) {
      const plot = Plot.plot({
        x: { line: true, insetLeft: -90 },
        y: { line: true, domain: [0, 30], axis: 'left' },
        marks: [
          Plot.line(data?.queryDriverDataForGraphic, {
            x: 'year',
            y: 'position',
            stroke: 'driver',
          }),
          Plot.text(data?.queryDriverDataForGraphic, {
            x: 'year',
            y: 'position',
            text: 'position',
            fill: 'currentColor',
            stroke: 'white',
            strokeWidth: 8,
          }),
          Plot.text(
            data?.queryDriverDataForGraphic,
            Plot.selectFirst({
              x: 'year',
              y: 'position',
              text: 'driver',
              z: 'driver',
              textAnchor: 'start',
              dx: 12,
              fontWeight: 'bold',
            })
          ),
        ],
      });
      containerRef.current && containerRef.current.append(plot);
      containerRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
      return () => plot.remove();
    }
  }, [data]);

  return (
    <Box>
      <FormControl>
        <InputLabel id='demo-simple-select-label'>Driver</InputLabel>
        <Select
          size='small'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={driverSelect === '' ? 'All' : driverSelect}
          label='Driver'
          onChange={(e) => {
            e.target.value !== 'All'
              ? setDriverSelect(e.target.value)
              : setDriverSelect('');
          }}
        >
          <MenuItem value={'All'}>All</MenuItem>
          {allDriver?.queryAllDriver.map((driver) => (
            <MenuItem key={driver} value={driver}>
              {driver}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div style={{ marginTop: '20px' }} ref={containerRef}></div>
    </Box>
  );
}
