import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Categories } from "./categories.model";
import { CreateCategoriesDto } from "./dto/create-categories.dto";


@Injectable()
export class CategoriesService {
  constructor(@InjectModel( Categories) private categoriesRepository: typeof  Categories) {
  }
  async createCategories(dto: CreateCategoriesDto) {
    const news = await this.categoriesRepository.create(dto);
    return news;
  }
  async getAllCategories() {
    const news = await this.categoriesRepository.findAll();
    return news;
  }
}
