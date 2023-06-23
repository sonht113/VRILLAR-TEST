import { Field, ObjectType } from '@nestjs/graphql';
import { DriverDto } from './driver.dto';

@ObjectType('DriverForGraphic')
export class DriverForGraphicDto {
  @Field()
  year: string;

  @Field()
  driver: string;

  @Field()
  position: string;
}
