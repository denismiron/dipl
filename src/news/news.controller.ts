import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateNewsDto } from "../news/dto/create-news.dto";
import { NewsService } from "./news.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("news")
export class NewsController {
  constructor(private newsService: NewsService) {
  }

  @Get()
  getAll() {
    return this.newsService.getAllNews();
  }

  @Post()
  @UseInterceptors(FileInterceptor('imageRef'))
  create(@Body() newsDto: CreateNewsDto,
         @UploadedFile() imageRef) {
    return this.newsService.createNews(newsDto, imageRef);
  }

  @Delete('/:id')
  deleteOneNews(@Param('id') id: number) {
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
