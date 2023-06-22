import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { dataf1 } from './entities/f1.entity';
import { DataDto } from './dto/data.dto';
import { data } from './entities/data.entity';

@Injectable()
export class F1Service {
  constructor(
    @InjectRepository(dataf1) private dataF1Repository: Repository<dataf1>,
  ) {}

  async getAllData(): Promise<dataf1[]> {
    return this.dataF1Repository.find();
  }

  async getAllGrandPrixInYear(year: string): Promise<any> {
    const result = await this.dataF1Repository.findOne({
      where: {
        year,
      },
    });
    let grand = [];
    result.data.filter((item: DataDto) => {
      if (grand.includes(item.grandPrix)) {
        grand = grand;
      } else {
        grand.push(item.grandPrix);
      }
    });
    return grand;
  }

  async getDataByYear(year: string): Promise<dataf1> {
    return this.dataF1Repository.findOne({
      where: {
        year,
      },
    });
  }

  async getDataUserInYear(year: string, winnerName: string): Promise<data[]> {
    const results = await this.dataF1Repository.findOne({
      where: {
        year,
      },
    });

    return results.data.filter((item: DataDto) =>
      item.winner.includes(winnerName),
    );
  }

  async getDataUserByLapsInYear(year: string, lap: string): Promise<data[]> {
    const results = await this.dataF1Repository.findOne({
      where: {
        year,
      },
    });

    return results.data.filter((item: DataDto) => item.laps === lap);
  }

  async getDataUserByGrandInYear(year: string, grand: string): Promise<data[]> {
    const results = await this.dataF1Repository.findOne({
      where: {
        year,
      },
    });

    return results.data.filter((item: DataDto) => item.grandPrix === grand);
  }
}
