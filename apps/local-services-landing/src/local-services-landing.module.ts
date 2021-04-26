import { Module } from '@nestjs/common';
import { LocalServicesLandingController } from './local-services-landing.controller';
import { LocalServicesLandingService } from './local-services-landing.service';

@Module({
  imports: [],
  controllers: [LocalServicesLandingController],
  providers: [LocalServicesLandingService],
})
export class LocalServicesLandingModule {}
