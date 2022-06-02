import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { News } from "./news.model";
import { CreateNewsDto } from "./dto/create-news.dto";
import { FilesService } from "../files/files.service";

@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private newsRepository: typeof News,
              private fileService: FilesService) {
  }

  async createNews(dto: CreateNewsDto, imageRef: any) {
    try {
      if (imageRef) {
        const fileName = await this.fileService.createFile(imageRef);
        const newsNew = await this.newsRepository.create({ ...dto, imageRef: fileName });
        return newsNew;
      } else {
        const newsNew = await this.newsRepository.create(dto);
        return newsNew;
      }
    } catch (e) {
      throw new HttpException("Произошла ошибка", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllNews() {
    const news = await this.newsRepository.findAll();
    return news;
  }

  async deleteOneNews(id: number) {
    const newsToDelete = await this.newsRepository.findOne({
      where: { id: id },
    });
    await this.newsRepository.destroy({ where: { id } });
    return newsToDelete.id;
  }

  async updateOneNews(id: number, newsDto: CreateNewsDto, imageRef: any) {
    if (imageRef) {
      const fileName = await this.fileService.createFile(imageRef)
      const [updatePost] = await this.newsRepository.update({ ...newsDto, imageRef: fileName }, {
        where: { id, }
      })
      return updatePost
    } else {
      const [updatePost] = await this.newsRepository.update(newsDto, {
        where: { id, }
      })
      return updatePost
    }
  }
}
