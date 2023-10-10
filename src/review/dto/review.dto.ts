import { IsArray, IsString } from 'class-validator';

export class ReviewDto {
  @IsString()
  authorName: string;

  @IsString()
  text: string;

  @IsArray()
  images: string[];
}

export class UpdateReviewDto {
  @IsString()
  text: string;

  @IsArray()
  images: string[];
}
