import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPostsByCategory(param: { category: string }) {
    const posts = await this.prisma.post.findMany({
      where: {
        category: param.category,
      },
    });

    return posts;
  }

  async createNewPost(dto: PostDto) {
    const post = await this.prisma.post.create({
      data: {
        titleRu: dto.titleRu,
        titleEng: dto.titleEng,
        textRu: dto.textRu,
        textEng: dto.textEng,
        images: dto.images,
        imageTitle: dto.imageTitle,
        category: dto.category,
      },
    });

    if (!post) {
      throw new BadRequestException('Cannot create new post!');
    }

    return post;
  }

  async updatePost(dto: UpdatePostDto) {
    const post = await this.prisma.post.update({
      where: {
        id: dto.id,
      },
      data: {
        titleRu: dto.titleRu,
        titleEng: dto.titleEng,
        category: dto.category,
        textRu: dto.textRu,
        textEng: dto.textEng,
        images: dto.images,
        imageTitle: dto.imageTitle,
      },
    });

    if (!post) {
      throw new BadRequestException('Cannot update post!');
    }

    return post;
  }

  async deletePost(param: { postId: string }) {
    const post = await this.prisma.post.delete({
      where: {
        id: +param.postId,
      },
    });

    return post;
  }
}
