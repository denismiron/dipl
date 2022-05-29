import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateNewsDto } from "../news/dto/create-news.dto";
import { NewsService } from "./news.service";

@Controller("news")
export class NewsController {
  constructor(private newsService: NewsService) {
  }

  @Get()
  getAll() {
    return this.newsService.getAllNews();
  }

  @Post()
  create(@Body() newsDto: CreateNewsDto) {
    return this.newsService.createNews(newsDto);
  }

  @Delete('/:id')
  deleteOneDish(@Param('id') id: number) {
    return { id: this.newsService.deleteOneNews(id) };
  }
  @Put('/:id')
  updateOneNews(@Param('id')id:number,
                @Body() newsDto: CreateNewsDto){
    return{
      id:this.newsService.updateOneNews(id, newsDto)
    };
  }
}
