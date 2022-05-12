import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { SequelizeModule } from "@nestjs/sequelize";
import {CompaniesController} from "./companies.controller";
import { Company } from "./companies.model";


@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [
    SequelizeModule.forFeature([Company])
  ]
})
export class CompaniesModule {}
