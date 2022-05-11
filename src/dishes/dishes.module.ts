import { Module } from '@nestjs/common';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Dish } from "./diches.model";

@Module({
  controllers: [DishesController],
  providers: [DishesService],
  imports: [
    SequelizeModule.forFeature([Dish])
  ]
})
export class DishesModule {}
