import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { of } from 'rxjs';
import { extname, join } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('/upload/:typeImg')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}-${ext}`;

          callback(null, filename);
        },
      }),
    }),
  )
  uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Param() param: { typeImg: string },
  ) {
    return {
      file: file.filename,
      typeImg: param.typeImg,
    };
  }

  @Get('/:filePath')
  getImage(@Param() param: { filePath: string }, @Res() res) {
    try {
      return of(
        res.sendFile(join(process.cwd(), './uploads/' + param.filePath)),
      );
    } catch (error) {
      return '';
    }
  }
}
