import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AppService, Post as PostType } from './app.service';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllPosts(): PostType[] {
    return this.appService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string): PostType {
    return this.appService.getPostById(id);
  }

  @Post()
  createPost(@Body() post: PostType): void {
    this.appService.createPost(post);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): void {
    this.appService.deletePost(id);
  }
}
