import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("get-all-by-id/:id") 
  getAllById(@Param() params: any): string {
    console.log(params.id);
    return "hello world!"
  }
}
