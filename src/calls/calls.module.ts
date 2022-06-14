import { Module } from '@nestjs/common';

import { SequelizeModule } from "@nestjs/sequelize";
import { Categories } from "../categories/categories.model";

import { CallsController } from "./calls.controller";

@Module({
  controllers: [CallsController],
  providers: [CallsController],
  imports: [
    SequelizeModule.forFeature([Categories]),
  ]
})
export class CallsModule {}
