import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { CreateDishDto } from "./dto/create-dish.dto";
import { DishesService } from "./dishes.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Dish } from "./diches.model";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

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

  @ApiOperation({summary:"Получение Всех блюд"})
  @ApiResponse({status:200, type: [Dish]})
  @Get()
  getAll() {
    return this.dishesService.getAllDishes();
  }

  @ApiOperation({summary:"Удаление блюда"})
  @ApiResponse({status:200})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
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
