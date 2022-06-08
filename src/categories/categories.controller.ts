import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoriesDto } from "./dto/create-categories.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Categories } from "./categories.model";

@ApiTags('Категории блюд')
@Controller("categories")
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {
  }
  @ApiOperation({summary:"Получение всех категорий"})
  @ApiResponse({status:200, type: [Categories]})
  @Get()
  getAll() {
    return this.categoriesService.getAllCategories();
  }

  @ApiOperation({summary:"Добавлении категории"})
  @ApiResponse({status:200, type: Categories})
  @Post()
  @UseInterceptors(FileInterceptor('imageRef'))
  create(@Body() categoryDto: CreateCategoriesDto,
         @UploadedFile() imageRef){
    return this.categoriesService.createCategory(categoryDto,imageRef)
  }

  @ApiOperation({summary:"Удаление категории"})
  @ApiResponse({status:200})
  @Delete('/:id')
  deleteOneCategory(@Param('id') id: number) {
    return { id: this.categoriesService.deleteOneCategory(id) };
  }
}
