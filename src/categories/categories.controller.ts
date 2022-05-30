import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoriesDto } from "./dto/create-categories.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("categories")
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {
  }

  @Get()
  getAll() {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  @UseInterceptors(FileInterceptor('imageRef'))
  create(@Body() categoryDto: CreateCategoriesDto,
         @UploadedFile() imageRef){
    return this.categoriesService.createCategory(categoryDto,imageRef)
  }
}
