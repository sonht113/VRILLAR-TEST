import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Data')
export class DataDto {
  @Field()
  grandPrix: string;

  @Field()
  date: string;

  @Field()
  winner: string;

  @Field()
  car: string;

  @Field()
  laps: string;

  @Field()
  time: string;
}
