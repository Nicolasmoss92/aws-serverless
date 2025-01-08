import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class AppController {
  @Get()
  getHello(): string {
    return 'Olá, mundo! Sua aplicação NestJS serverless está funcionando!';
  }
}
