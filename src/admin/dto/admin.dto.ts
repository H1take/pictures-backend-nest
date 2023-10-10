import { IsString } from 'class-validator';

export class AdminLoginDto {
  @IsString()
  login: string;

  @IsString()
  password: string;
}

export class AdminUpdateDto {
  @IsString()
  login: string;

  @IsString()
  about: string;

  @IsString()
  photo: string;
}
