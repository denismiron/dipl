import { Module } from '@nestjs/common';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Dish } from "./diches.model";
import { Categories } from "../categories/categories.model";
import { FilesModule } from "../files/files.module";
import { ImagesModule } from "../images/images.module";

@Module({
  controllers: [DishesController],
  providers: [DishesService],
  imports: [
    SequelizeModule.forFeature([Dish, Categories]),
    FilesModule,
    ImagesModule
  ]
})
export class DishesModule {}
