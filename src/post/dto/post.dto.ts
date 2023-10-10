import { IsArray, IsNumber, IsString } from 'class-validator';

export class PostDto {
  @IsString()
  titleRu: string;

  @IsString()
  titleEng: string;

  @IsString()
  imageTitle: string;

  @IsString()
  textRu: string;

  @IsString()
  textEng: string;

  @IsString()
  category: string;

  @IsArray()
  images: string[];
}

export class UpdatePostDto {
  @IsNumber()
  id: number;

  @IsString()
  titleRu: string;

  @IsString()
  titleEng: string;

  @IsString()
  imageTitle: string;

  @IsString()
  textRu: string;

  @IsString()
  textEng: string;

  @IsString()
  category: string;

  @IsArray()
  images: string[];
}
