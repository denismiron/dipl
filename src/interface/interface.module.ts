import { Module } from '@nestjs/common';
import { InterfaceController } from './interface.controller';
import { InterfaceService } from "./interface.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Interface } from "./interface.model";
import { FilesModule } from "../files/files.module";
import { ImagesModule } from "../images/images.module";


@Module({
  controllers: [InterfaceController],
  providers:[InterfaceService],
  imports:[
    SequelizeModule.forFeature([Interface]),
    FilesModule,
    ImagesModule
  ]
})
export class InterfaceModule {}
