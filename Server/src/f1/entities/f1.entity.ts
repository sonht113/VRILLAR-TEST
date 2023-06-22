import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class dataf1 {
  @ObjectIdColumn()
  _id: string;

  @Column()
  year: string;

  @Column()
  data: Data[];
}

interface Data {
  grandPrix: string;
  date: string;
  winner: string;
  car: string;
  laps: string;
  time: string;
}
