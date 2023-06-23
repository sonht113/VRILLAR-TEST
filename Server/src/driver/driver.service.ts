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

  async getDriverResultAllYear(driver?: string): Promise<driverdata[]> {
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

  async getAllDriverAllYear(): Promise<string[]> {
    const res = await this.driverDataRepository.find();
    let result = [];
    for (const r of res) {
      for (const d of r.data) {
        if (!result.find((driver) => driver === d.driver)) {
          result.push(d.driver);
        } else {
          result = result;
        }
      }
    }
    return result;
  }

  async getDriverEveryYear(driverName: string): Promise<any> {
    const res = await this.driverDataRepository.find();
    let result = [];
    for (const r of res) {
      for (const d of r.data) {
        result.push({
          year: r.year,
          driver: d.driver,
          position: d.position,
        });
      }
    }
    if (driverName) {
      result = result.filter(
        (item: { year: string; driver: string; position: string }) =>
          item.driver === driverName,
      );
    } else {
      result = result;
    }
    return result;
  }
}
