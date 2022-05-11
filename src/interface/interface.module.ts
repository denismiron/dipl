import { Module } from '@nestjs/common';
import { InterfaceController } from './interface.controller';
import { InterfaceService } from "./interface.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Interface } from "./interface.model";


@Module({
  controllers: [InterfaceController],
  providers:[InterfaceService],
  imports:[
    SequelizeModule.forFeature([Interface])
  ]
})
export class InterfaceModule {}
