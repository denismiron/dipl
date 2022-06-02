import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Categories } from "./categories.model";
import { CreateCategoriesDto } from "./dto/create-categories.dto";
import { FilesService } from "../files/files.service";
import {ImagesService} from "../images/images.service";

@Injectable()
export class CategoriesService {
  constructor(@InjectModel( Categories) private categoriesRepository: typeof  Categories,
              private fileService: FilesService,
              private imagesService: ImagesService) {
  }

  async createCategory(dto: CreateCategoriesDto, imageRef: any) {
    const fileName = await this.fileService.createFile(imageRef)
    const uploadedUrl = await this.imagesService.uploadImage(fileName)
    const category = await this.categoriesRepository.create({...dto, imageRef: uploadedUrl});
    await this.fileService.deleteFile(fileName)
    return category;
  }

  async getAllCategories() {
    const categories = await this.categoriesRepository.findAll();
    return categories;
  }
}
