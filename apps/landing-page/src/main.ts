import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { LandingPageModule } from './landing-page.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(LandingPageModule);

  await app.listen(3000);
}

bootstrap();
