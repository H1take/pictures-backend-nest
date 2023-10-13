import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto, UpdatePostDto } from './dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/:category')
  getPostsByCategory(@Param() param: { category: string }) {
    return this.postService.getPostsByCategory(param);
  }

  @Post('/new')
  createNewPost(@Body() dto: PostDto) {
    return this.postService.createNewPost(dto);
  }

  @Patch('/info')
  updatePost(@Body() dto: UpdatePostDto) {
    return this.postService.updatePost(dto);
  }

  @Delete('/:id')
  deletePost(@Param() param: { postId: string }) {
    return this.postService.deletePost(param);
  }
}
