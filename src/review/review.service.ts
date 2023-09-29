import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ReviewDto,UpdateReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async createReview(dto: ReviewDto) {
    const review = await this.prisma.review.create({
      data: {
        authorName: dto.authorName,
        text: dto.text,
        images: dto.images,
      },
    });

    if (!review) {
      throw new BadRequestException('Cannot create new rewiew');
    }

    return review;
  }


  async getAllReviews(){
    const reviews = await this.prisma.review.findMany({});

    if (!reviews) {
      throw new BadRequestException('Cannot get all reviews!');
    }

    return reviews;
  }


  async deleteReview(param:{id:string}){
    const review = await this.prisma.review.delete({
      where: {
        id: +param.id
      }
    });

    if (!review) {
      throw new BadRequestException('Cannot get all reviews!');
    }

    return review;
  }

  async updateReview(param:{id:string, text:string},dto:UpdateReviewDto){
    const review = await this.prisma.review.update({
      where: {
        id: +param.id
      },
      data:{
        text: dto.text,
        images:dto.images
      }
    });

    if (!review) {
      throw new BadRequestException('Cannot update reviews!');
    }

    return review;
  }

}
