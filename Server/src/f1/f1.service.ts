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

  async queryData(
    year: string,
    winnerName?: string,
    grandPrix?: string,
    lap?: string,
  ): Promise<any> {
    const result = await this.dataF1Repository.findOne({
      where: {
        year,
      },
    });
    let res = result.data;
    if (winnerName) {
      res = res.filter((item) => item.winner.includes(winnerName));
    }

    if (grandPrix) {
      res = res.filter((item) => item.grandPrix === grandPrix);
    }

    if (lap) {
      res = res.filter((item) => item.laps == lap);
    }

    return res;
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

  async getAllYear(): Promise<any> {
    const res = await this.dataF1Repository.find();
    const arr = [];
    for (const r of res) {
      arr.push(r.year);
    }
    return arr.sort((a: string, b: string) => Number(b) - Number(a));
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
