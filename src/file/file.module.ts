import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import {MulterModule} from "@nestjs/platform-express";

@Module({
  imports: [MulterModule.register({ dest: './uploads' })],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
