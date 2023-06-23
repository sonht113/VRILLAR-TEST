export type Driver = {
  position: string;
  driver: string;
  nationality: string;
  car: string;
  point: string;
};

export type DriverInYears = {
  year: string;
  data: Driver[];
};
