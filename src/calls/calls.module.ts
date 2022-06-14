import { Module } from '@nestjs/common';

import { SequelizeModule } from "@nestjs/sequelize";
import { Categories } from "../categories/categories.model";
import {CallsService} from "./calls.service";
import { CallsController } from "./calls.controller";

@Module({
  controllers: [CallsController],
  providers: [CallsService],
  imports: [
    SequelizeModule.forFeature([Categories]),
  ]
})
export class CallsModule {}
