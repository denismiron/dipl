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
import { CreateReviewDto } from "./dto/create-review.dto";
import { ReviewsService } from "./reviews.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Review } from "./reviews.model";
import { Dish } from "../dishes/diches.model";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdateReviewDto } from "./dto/update-review.dto";




@ApiTags('Отзывы пользователей')
@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {
  }
  @ApiOperation({summary:"Создание отзыва"})
  @ApiResponse({status:200, type: Review})
  @Post('/add')
  create(@Body() reviewDto: CreateReviewDto) {
    return this.reviewsService.createReview(reviewDto);
  }
  @ApiOperation({summary:"Получение отзыва для админа"})
  @ApiResponse({status:200, type: [Review]})
  @Get('/getAllForAdmin')
  getAll(){
    return this.reviewsService.getAllReviews()
  }

  @ApiOperation({summary:"Получение отзыва"})
  @ApiResponse({status:200, type: [Review]})
  @Get()
  getInfo(){
    return this.reviewsService.getAllReviewsInfo()
  }

  @ApiOperation({summary:"Удаление отзыва"})
  @ApiResponse({status:200})
  @Delete('/:id')
  deleteReview(@Param('id') id: number) {
    return { id: this.reviewsService.deleteOneReview(id) };
  }

  @ApiOperation({summary:"Изменение отзыва"})
  @ApiResponse({status:200, type: [Dish]})
  @Put('/:id')
  @UseInterceptors(FileInterceptor('imageRef'))
  updateOneDish(@Param('id')id:number,
                @Body() reviewDto: UpdateReviewDto,
                @UploadedFile() imageRef){
    return{
      id:this.reviewsService.updateOneReview(id, reviewDto)
    };
  }


}
