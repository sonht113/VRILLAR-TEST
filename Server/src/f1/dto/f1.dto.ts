import { Field, ObjectType } from '@nestjs/graphql';
import { DataDto } from './data.dto';

@ObjectType('DataF1')
export class DataF1Dto {
  @Field()
  year: string;

  @Field(() => [DataDto])
  data: DataDto[];
}
