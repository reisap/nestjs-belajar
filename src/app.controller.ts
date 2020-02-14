import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Get("quotes") //routes define
  // getQuotes() : {message:string} {
  //   return {message:"quotes"};
  // }
}
