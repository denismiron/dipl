import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { News } from "./news.model";
import { CreateNewsDto } from "./dto/create-news.dto";
import { FilesService } from "../files/files.service";

@Injectable()
export class NewsService {
  constructor(@InjectModel(News) private newsRepository: typeof News,
              private fileService: FilesService) {
  }
  async createNews(dto: CreateNewsDto, imageRef:any) {
    const fileName = await this.fileService.createFile(imageRef)
    const news = await this.newsRepository.create({...dto, imageRef: fileName});
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
  async updateOneNews(id:number, newsDto:CreateNewsDto){
    const [updatePost] = await this.newsRepository.update({...newsDto},{
    where:{ id, }
    })
    return updatePost
  }
}
