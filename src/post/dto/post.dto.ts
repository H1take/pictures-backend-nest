import {IsNumber, IsString} from "class-validator";

export class PostDto {
    @IsString()
    title: string;

    @IsString()
    imageTitle: string;

    @IsString()
    text: string;

    @IsString()
    category: string;

    @IsString()
    images: string;
}

export class UpdatePostDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    imageTitle: string;

    @IsString()
    text: string;

    @IsString()
    category: string;

    @IsString()
    images: string;
}
