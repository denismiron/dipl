import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Categories } from  "./categories.model"
import { FilesModule } from "../files/files.module";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([Categories]),
    FilesModule
  ]
})
export class CategoriesModule {}
