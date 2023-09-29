import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewDto } from './dto/review.dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('/new')
  createReview(@Body()dto:ReviewDto){
    return this.reviewService.createReview(dto)
  }

  @Get('/all')
  getAllReviews(){
    return this.reviewService.getAllReviews()
  }

  @Delete('/:id')
  deleteReview(@Param()param:{id:string}){
    return this.reviewService.deleteReview(param)
  }

  @Patch('/:id')
  updateReviews(@Body()){

  }

}
