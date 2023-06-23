import { gql } from '@apollo/client';

export const QUERY_DRIVER_IN_YEARS = gql(`
query queryDriverInYears($driver: String!){
    queryDriverAllYear(driver: $driver){
        year
        data{
            position
            driver
            nationality
            car
            point
        }
    }
}
`);

export const QUERY_ALL_DRIVER = gql(`
query{
    queryAllDriver
}
`);

export const QUERY_DRIVER_FOR_GRAPHIC = gql(`
query queryDriverGraphic($driverName: String!){
    queryDriverDataForGraphic(driverName: $driverName){
        year
        driver
        position
    }
}
`);
