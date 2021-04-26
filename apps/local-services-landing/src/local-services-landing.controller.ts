import { Controller, Get } from '@nestjs/common';
import { LocalServicesLandingService } from './local-services-landing.service';

@Controller()
export class LocalServicesLandingController {
  constructor(private readonly localServicesLandingService: LocalServicesLandingService) {}

  @Get()
  getHello(): string {
    return this.localServicesLandingService.getHello();
  }
}
