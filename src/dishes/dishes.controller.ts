import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateDishDto } from "./dto/create-dish.dto";
import { DishesService } from "./dishes.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("dishes")
export class DishesController {
  constructor(private dishesService: DishesService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('imageRef'))
  create(@Body() dishDto: CreateDishDto,
         @UploadedFile() imageRef){
    return this.dishesService.createDish(dishDto,imageRef)
  }

  @Get('/:getById')
  getById(@Param('getById')categoryId:number){
      return this.dishesService.getDishById(categoryId);
  }

  @Delete('/:id')
  deleteOneDish(@Param('id') id: number) {
    return { id: this.dishesService.deleteOneDish(id) };
  }
  // @Patch('/:id')
  // updateOneDish(@Param('id')id:number,
  //               @UploadedFile() imageRef,
  //               @Body() dishDto: CreateDishDto){
  //   return{
  //     id:this.dishesService.updateOneDish(id, dishDto, imageRef)
  //   };
  // }
}
