import { gql } from '@apollo/client';

export const GET_ALL_DATA = gql(`
query{
  getAllData{
    year
  }
}
`);

export const QUERY_DATA = gql(`
query queryData($year: String!, $winnerName: String!, $lap: String!, $grandPrix: String!){
    queryData(year: $year, winnerName: $winnerName, grandPrix: $grandPrix, lap: $lap) {
        grandPrix
        date
        winner
        laps
        time
        car
    }
}
`);

export const GET_ALL_GRAND = gql(`
query getAllGrand($year: String!){
    getGrandPrixInYear(year: $year)
}
`);

export const GET_F1_BY_YEAR = gql(`
query getF1ByYear($year: String!) {
    getDataByYear(year: $year){
        year
        data {
            grandPrix
            car
            time
            laps
            date
            winner
        }
    } 
}
`);

export const GET_ALL_YEAR = gql(`
query {
    getAllYear
}
`);
