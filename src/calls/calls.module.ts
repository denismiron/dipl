import { Module } from '@nestjs/common';

import { SequelizeModule } from "@nestjs/sequelize";
import {CallsService} from "./calls.service";
import { CallsController } from "./calls.controller";
import { Call } from "./calls.model";

@Module({
  controllers: [CallsController],
  providers: [CallsService],
  imports: [
    SequelizeModule.forFeature([Call]),
  ]
})
export class CallsModule {}
