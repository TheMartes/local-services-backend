import { Test, TestingModule } from '@nestjs/testing';
import { LocalServicesLandingController } from './local-services-landing.controller';
import { LocalServicesLandingService } from './local-services-landing.service';

describe('LocalServicesLandingController', () => {
  let localServicesLandingController: LocalServicesLandingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LocalServicesLandingController],
      providers: [LocalServicesLandingService],
    }).compile();

    localServicesLandingController = app.get<LocalServicesLandingController>(LocalServicesLandingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(localServicesLandingController.getHello()).toBe('Hello World!');
    });
  });
});
