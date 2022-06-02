import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Categories } from  "./categories.model"
import { FilesModule } from "../files/files.module";
import { ImagesModule } from "../images/images.module";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([Categories]),
    FilesModule,
    ImagesModule
  ]
})
export class CategoriesModule {}
