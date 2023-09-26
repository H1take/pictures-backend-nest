import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {PrismaService} from "./prisma.service";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const prismaService = app.get(PrismaService, { strict: false });
  app.enableShutdownHooks();

  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
  );
  await app.listen(5000);
}
bootstrap();
