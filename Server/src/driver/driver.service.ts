import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { driverdata } from './entities/driver_in_year.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(driverdata)
    private driverDataRepository: Repository<driverdata>,
  ) {}

  async getDriverResultAllYear(driver?: string): Promise<any> {
    const res = await this.driverDataRepository.find();
    let result = [];
    if (driver) {
      for (const r of res) {
        const d = r.data.filter((item) => item.driver.includes(driver));
        result.push({ year: r.year, data: d });
      }
    } else {
      result = [...res];
    }
    return result;
  }
}
