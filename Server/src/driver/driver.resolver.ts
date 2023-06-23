import { Args, Query, Resolver } from '@nestjs/graphql';
import { DriverInYearDto } from './dto/driver_in_year.dto';
import { DriverService } from './driver.service';

@Resolver(() => DriverInYearDto)
export class DriverResolver {
  constructor(private driverService: DriverService) {}

  @Query(() => [DriverInYearDto])
  queryDriverAllYear(@Args('driver') driver?: string) {
    return this.driverService.getDriverResultAllYear(driver);
  }
}
