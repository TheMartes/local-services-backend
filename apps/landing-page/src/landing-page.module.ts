import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LandingPageController } from './ui/http/landing-page.controller';
import { GeneralConfig } from '../../../src/config/enums/general.enum';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: GeneralConfig.rootEnv,
    }),
  ],
  controllers: [LandingPageController],
})
export class LandingPageModule {}
