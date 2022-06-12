import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { ReviewsService } from "./reviews.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Review } from "./reviews.model";

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


}
