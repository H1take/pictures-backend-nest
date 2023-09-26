import {BadRequestException, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {PostDto, UpdatePostDto} from "./dto/post.dto";

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPostsByCategory(param: { category: string }) {
    const posts = await this.prisma.post.findMany({
      where: {
        category: param.category
      }
    });

    return posts;
  }

  async createNewPost(dto: PostDto) {
    const post = await this.prisma.post.create({
      data: {
        title: dto.title,
        text: dto.text,
        images: dto.images,
        imageTitle: dto.imageTitle,
        category: dto.category
      }
    });

    if (!post) {
      throw new BadRequestException("Cannot create new post!");
    }

    return post;
  }

  async updatePost(dto: UpdatePostDto) {
    const post = await this.prisma.post.update({
      where: {
        id: dto.id
      },
      data: {
        title: dto.title,
        category: dto.category,
        text: dto.text,
        images: dto.images,
        imageTitle: dto.imageTitle
      }
    });

    if (!post) {
      throw new BadRequestException("Cannot update post!");
    }

    return post;
  }
}
