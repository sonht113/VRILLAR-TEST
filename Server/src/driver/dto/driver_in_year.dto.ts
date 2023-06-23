import { Field, ObjectType } from '@nestjs/graphql';
import { DriverDto } from './driver.dto';

@ObjectType('DriverInYear')
export class DriverInYearDto {
  @Field()
  year: string;

  @Field(() => [DriverDto])
  data: DriverDto[];
}
