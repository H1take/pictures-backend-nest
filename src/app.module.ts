import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaService} from "./prisma.service";
import { PostModule } from './post/post.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [PostModule, FileModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
