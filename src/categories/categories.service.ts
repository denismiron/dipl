import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Categories } from "./categories.model";
import { CreateCategoriesDto } from "./dto/create-categories.dto";
import { FilesService } from "../files/files.service";
const cloudinary = require('../utils/cloudinary');

@Injectable()
export class CategoriesService {
  constructor(@InjectModel( Categories) private categoriesRepository: typeof  Categories,
              private fileService: FilesService) {
  }

  async createCategory(dto: CreateCategoriesDto, imageRef: any) {
    const request = await cloudinary.uploader.upload(imageRef)
    let fileName = request.url
    const category = await this.categoriesRepository.create({...dto, imageRef: fileName});
    return category;
  }

  async getAllCategories() {
    const categories = await this.categoriesRepository.findAll();
    return categories;
  }
}
