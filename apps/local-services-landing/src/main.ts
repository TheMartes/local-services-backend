import { NestFactory } from '@nestjs/core';
import { LocalServicesLandingModule } from './local-services-landing.module';

async function bootstrap() {
  const app = await NestFactory.create(LocalServicesLandingModule);
  await app.listen(3000);
}
bootstrap();
