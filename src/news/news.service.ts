import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { News } from "./news.model";
import { CreateNewsDto } from "./dto/create-news.dto";


@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private newsRepository: typeof News) {
  }
  async createNews(dto: CreateNewsDto) {
    const news = await this.newsRepository.create(dto);
    return news;
  }
  async getAllNews() {
    const news = await this.newsRepository.findAll();
    return news;
  }
  async deleteOneNews(id:number){
    const newsToDelete = await this.newsRepository.findOne({
      where:{id:id},
    });
    await this.newsRepository.destroy({where:{id}});
    return newsToDelete.id;
  }
}
