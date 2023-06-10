import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { msg: string } {
    return { msg: 'Here is the products service!' };
  }
}
