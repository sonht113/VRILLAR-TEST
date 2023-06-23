import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Driver')
export class DriverDto {
  @Field()
  position: string;

  @Field()
  driver: string;

  @Field()
  nationality: string;

  @Field()
  car: string;

  @Field()
  point: string;
}
