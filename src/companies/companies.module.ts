import { forwardRef, Module } from "@nestjs/common";
import { CompaniesService } from './companies.service';
import { SequelizeModule } from "@nestjs/sequelize";
import {CompaniesController} from "./companies.controller";
import { Company } from "./companies.model";
import { RolesModule } from "../roles/roles.module";
import { AuthModule } from "../auth/auth.module";


@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [
    SequelizeModule.forFeature([Company]),
    RolesModule,
    forwardRef(() => AuthModule)
  ]
})
export class CompaniesModule {}
