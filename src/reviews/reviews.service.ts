import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Review } from "./reviews.model";
import { CreateReviewDto } from "./dto/create-review.dto";

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(Review) private reviewRepository: typeof Review) {

  }

  async createReview(dto: CreateReviewDto) {
    const review = await this.reviewRepository.create(dto);
    return review;
  }

  async getAllReviews() {
    const reviews = await this.reviewRepository.findAll();
    return reviews;
  }

  async getAllReviewsInfo(){
    const reviews = await this.reviewRepository.findAll({
      attributes:['id','message',' adminMessage','name']
    })
    return reviews;
  }
}
