import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getAllPosts', () => {
    it('should return an array of posts', async () => {
      const result = [];
      jest.spyOn(appService, 'getAllPosts').mockImplementation(() => result);

      expect(await appController.getAllPosts()).toBe(result);
    });
  });

  describe('getPostById', () => {
    it('should return a post', async () => {
      const result = {
        id: '1',
        content: 'post content',
        createdAt: new Date(),
      };
      jest.spyOn(appService, 'getPostById').mockImplementation(() => result);

      expect(await appController.getPostById('1')).toBe(result);
    });
  });

  describe('createPost', () => {
    it('should create a post', async () => {
      const post = { id: '2', content: 'new post', createdAt: new Date() };
      jest.spyOn(appService, 'createPost').mockImplementation(() => null);

      await appController.createPost(post);
      expect(appService.createPost).toHaveBeenCalledWith(post);
    });
  });

  describe('deletePost', () => {
    it('should delete a post', async () => {
      jest.spyOn(appService, 'deletePost').mockImplementation(() => null);

      await appController.deletePost('1');
      expect(appService.deletePost).toHaveBeenCalledWith('1');
    });
  });
});
