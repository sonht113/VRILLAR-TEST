import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { driver } from './driver.entity';

@Entity()
export class driverdata {
  @ObjectIdColumn()
  _id: string;

  @Column()
  year: string;

  @Column()
  data: Driver[];
}

interface Driver {
  position: string;
  driver: string;
  nationality: string;
  car: string;
  point: string;
}
