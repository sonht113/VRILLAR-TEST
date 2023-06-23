import { Column, Entity } from 'typeorm';

@Entity()
export class driver {
  @Column()
  position: string;

  @Column()
  driver: string;

  @Column()
  nationality: string;

  @Column()
  car: string;

  @Column()
  point: string;
}
