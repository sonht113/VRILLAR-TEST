import { Args, Query, Resolver } from '@nestjs/graphql';
import { F1Service } from './f1.service';
import { DataF1Dto } from './dto/f1.dto';
import { DataDto } from './dto/data.dto';

@Resolver(() => DataF1Dto)
export class F1Resolver {
  constructor(private f1Service: F1Service) {}

  @Query(() => [DataF1Dto])
  getAllData() {
    return this.f1Service.getAllData();
  }

  @Query(() => [String])
  getGrandPrixInYear(@Args('year') year: string) {
    return this.f1Service.getAllGrandPrixInYear(year);
  }

  @Query(() => [String])
  getAllYear() {
    return this.f1Service.getAllYear();
  }

  @Query(() => [DataDto])
  queryData(
    @Args('year') year: string,
    @Args('winnerName') winnerName?: string,
    @Args('grandPrix') grandPrix?: string,
    @Args('lap') lap?: string,
  ) {
    return this.f1Service.queryData(year, winnerName, grandPrix, lap);
  }

  @Query(() => DataF1Dto)
  getDataByYear(@Args('year') year: string) {
    return this.f1Service.getDataByYear(year);
  }

  @Query(() => [DataDto])
  getDataUserInYearWinnerName(
    @Args('year') year: string,
    @Args('winnerName') winnerName: string,
  ) {
    return this.f1Service.getDataUserInYear(year, winnerName);
  }

  @Query(() => [DataDto])
  getDataUserInYearByLaps(
    @Args('year') year: string,
    @Args('lap') lap: string,
  ) {
    return this.f1Service.getDataUserInYear(year, lap);
  }

  @Query(() => [DataDto])
  getDataUserInYearByGrand(
    @Args('year') year: string,
    @Args('grand') grand: string,
  ) {
    return this.f1Service.getDataUserInYear(year, grand);
  }
}
