import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private posts: Post[] = [
    {
      id: '1',
      content: 'This is the first post',
      createdAt: new Date('2022-01-01T00:00:00Z'),
    },
    {
      id: '2',
      content: 'This is the second post',
      createdAt: new Date('2022-01-02T00:00:00Z'),
    },
    {
      id: '3',
      content: 'This is the third post',
      createdAt: new Date('2022-01-03T00:00:00Z'),
    },
  ];

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPostById(id: string): Post {
    return this.posts.find((post) => post.id === id);
  }

  createPost(post: Post): void {
    this.posts.push(post);
  }

  deletePost(id: string): void {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}

export interface Post {
  id: string;
  content: string;
  createdAt: Date;
}
