import { Args, Query, Resolver } from '@nestjs/graphql';
import { DriverInYearDto } from './dto/driver_in_year.dto';
import { DriverService } from './driver.service';
import { DriverForGraphicDto } from './dto/driver_for_graphic.dto';

@Resolver(() => DriverInYearDto)
export class DriverResolver {
  constructor(private driverService: DriverService) {}

  @Query(() => [DriverInYearDto])
  queryDriverAllYear(@Args('driver') driver?: string) {
    return this.driverService.getDriverResultAllYear(driver);
  }

  @Query(() => [String])
  queryAllDriver() {
    return this.driverService.getAllDriverAllYear();
  }

  @Query(() => [DriverForGraphicDto])
  queryDriverDataForGraphic(@Args('driverName') driverName: string) {
    return this.driverService.getDriverEveryYear(driverName);
  }
}
