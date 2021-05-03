import { Test, TestingModule } from '@nestjs/testing';
import { LandingPageController } from './ui/http/landing-page.controller';

describe('LandingPageController', () => {
  let landingPageController: LandingPageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LandingPageController],
    }).compile();

    landingPageController = app.get<LandingPageController>(LandingPageController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(landingPageController.landingPage()).toBe('Hello World!');
    });
  });
});
