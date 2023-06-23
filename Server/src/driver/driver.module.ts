import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverService } from './driver.service';
import { DriverResolver } from './driver.resolver';
import { driverdata } from './entities/driver_in_year.entity';
import { driver } from './entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([driverdata, driver])],
  providers: [DriverService, DriverResolver],
  exports: [],
})
export class DriverModule {}
