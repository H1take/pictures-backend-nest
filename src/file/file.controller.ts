import {Controller, Get, Post, Param, UseInterceptors, UploadedFile, Res} from '@nestjs/common';
import { FileService } from './file.service';
import { of } from 'rxjs';
import { join } from 'path';
import {FileInterceptor} from "@nestjs/platform-express";
@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return file.filename;
  }

  @Get('/:filePath')
  getImage(@Param() param: { filePath: string }, @Res() res) {
    try {
      return of(
          res.sendFile(
              join(
                  process.cwd(),
                  './uploads/' + param.filePath,
              ),
          ),
      );
    } catch (error) {
      return '';
    }
  }
}
