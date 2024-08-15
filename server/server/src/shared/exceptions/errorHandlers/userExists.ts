import { HttpException, HttpStatus } from '@nestjs/common';

export class UserExists extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.FORBIDDEN);
  }
}
