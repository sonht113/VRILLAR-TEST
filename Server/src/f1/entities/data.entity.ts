import { Column, Entity } from 'typeorm';

@Entity()
export class data {
  @Column()
  grandPrix: string;

  @Column()
  date: string;

  @Column()
  winner: string;

  @Column()
  car: string;

  @Column()
  laps: string;

  @Column()
  time: string;
}
