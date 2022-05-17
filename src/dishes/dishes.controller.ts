import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

  @Get('/:getById')
  getById(@Param('getById')categoryId:number){
      return this.dishesService.getDishById(categoryId);
  }


}
