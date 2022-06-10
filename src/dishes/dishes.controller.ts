import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateDishDto } from "./dto/create-dish.dto";
import { DishesService } from "./dishes.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Dish } from "./diches.model";

@ApiTags("Блюда")
@Controller("dishes")
export class DishesController {
  constructor(private dishesService: DishesService) {
  }
  @ApiOperation({summary:"Создание блюда"})
  @ApiResponse({status:200, type: Dish})
  @Post()
  @UseInterceptors(FileInterceptor('imageRef'))
  create(@Body() dishDto: CreateDishDto,
         @UploadedFile() imageRef){
    return this.dishesService.createDish(dishDto,imageRef)
  }

  @ApiOperation({summary:"Получение блюд по id категории"})
  @ApiResponse({status:200, type: [Dish]})
  @Get('/:getById')
  getById(@Param('getById')categoryId:number){
      return this.dishesService.getDishById(categoryId);
  }

  @ApiOperation({summary:"Удаление блюда"})
  @ApiResponse({status:200})
  @Delete('/:id')
  deleteOneDish(@Param('id') id: number) {
    return { id: this.dishesService.deleteOneDish(id) };
  }

  @ApiOperation({summary:"Изменение блюда"})
  @ApiResponse({status:200, type: [Dish]})
  @Put('/:id')
  @UseInterceptors(FileInterceptor('imageRef'))
  updateOneDish(@Param('id')id:number,
                @Body() dishDto: CreateDishDto,
                @UploadedFile() imageRef){
    return{
      id:this.dishesService.updateOneDish(id, dishDto, imageRef)
    };
  }

}
