import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoriesDto } from "./dto/create-categories.dto";

@Controller("categories")
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {
  }

  @Get()
  getAll() {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  create(@Body() categoriesDto: CreateCategoriesDto) {
    return this.categoriesService.createCategories(categoriesDto);
  }
}
