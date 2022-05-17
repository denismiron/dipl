import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { ReviewsService } from "./reviews.service";

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {
  }

  @Post('/add')
  create(@Body() reviewDto: CreateReviewDto) {
    return this.reviewsService.createReview(reviewDto);
  }

  @Get()
  getAll(){
    return this.reviewsService.getAllReviews()
  }


}
