import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { News } from "./news.model";
import { CreateNewsDto } from "./dto/create-news.dto";
import { FilesService } from "../files/files.service";
import { ImagesService } from "../images/images.service";


@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private newsRepository: typeof News,
              private fileService: FilesService,
              private imagesService: ImagesService) {
  }

  async createNews(newsDto: CreateNewsDto, imageRef: any) {
    if (imageRef) {
      const fileName = await this.fileService.createFile(imageRef);
      const uploadedUrl = await this.imagesService.uploadImage(fileName)
      const newNews = await this.newsRepository.create({ ...newsDto, imageRef: uploadedUrl });
      return newNews;
    } else {
      const newNews = await this.newsRepository.create(newsDto);
      return newNews;
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
      const fileName = await this.fileService.createFile(imageRef);
      const uploadedUrl = await this.imagesService.uploadImage(fileName)
      const [updatePost] = await this.newsRepository.update({ ...newsDto, imageRef: uploadedUrl }, {
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
