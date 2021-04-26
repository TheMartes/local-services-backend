import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalServicesLandingService {
  getHello(): string {
    return 'Hello World!';
  }
}
