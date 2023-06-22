import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataf1 } from './entities/f1.entity';
import { F1Resolver } from './f1.resolver';
import { F1Service } from './f1.service';
import { data } from './entities/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([dataf1, data])],
  providers: [F1Resolver, F1Service],
  exports: [],
})
export class F1Module {}
