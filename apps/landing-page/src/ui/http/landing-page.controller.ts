import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LandingPage } from '../../domain/interfaces/landing-page.interface';
import { LandingPageConfig } from '../../../../../src/config/enums/landing-page.enum';

@Controller()
export class LandingPageController {
  constructor(private readonly configService: ConfigService) {}

  @Get('/')
  landingPage(): LandingPage {
    return {
      isMarketplaceAvailable: this.configService.get<boolean>(LandingPageConfig.isMarketplaceAvailable),
    };
  }
}
