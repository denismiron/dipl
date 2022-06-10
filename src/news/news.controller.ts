import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { CreateNewsDto } from "../news/dto/create-news.dto";
import { NewsService } from "./news.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { News } from "./news.model";


@ApiTags("Новости")
@Controller("news")
export class NewsController {
  constructor(private newsService: NewsService) {
  }
  @ApiOperation({summary:"Получение всех новостей"})
  @ApiResponse({status:200, type: [News] })
  @Get()
  getAll() {
    return this.newsService.getAllNews();
  }

  @ApiOperation({summary:"Создание новости"})
  @ApiResponse({status:200, type: News})
  @Post()
  @UseInterceptors(FileInterceptor('imageRef'))
  create(@Body() newsDto: CreateNewsDto,
         @UploadedFile() imageRef){
    return this.newsService.createNews(newsDto,imageRef)
  }

  @ApiOperation({summary:"Удаление Новости"})
  @ApiResponse({status:200})
  @Delete('/:id')
  deleteOneNews(@Param('id') id: number) {
    return { id: this.newsService.deleteOneNews(id) };
  }

  @ApiOperation({summary:"Изменение Новости"})
  @ApiResponse({status:200, type: News})
  @Put('/:id')
  @UseInterceptors(FileInterceptor('imageRef'))
  updateOneNews(@Param('id')id:number,
                @Body() newsDto: CreateNewsDto,
                @UploadedFile() imageRef){
    return{
      id:this.newsService.updateOneNews(id, newsDto, imageRef)
    };
  }
}
