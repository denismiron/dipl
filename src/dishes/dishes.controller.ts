import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateDishDto } from "./dto/create-dish.dto";
import { DishesService } from "./dishes.service";

@Controller("dishes")
export class DishesController {
  constructor(private dishesService: DishesService) {
  }

  @Post()
  create(@Body() dishDto: CreateDishDto) {
    return this.dishesService.createDish(dishDto);
  }

  @Get()
  getAll(){
    return this.dishesService.getAllDishes()
  }


}
