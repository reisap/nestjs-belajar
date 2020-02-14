import {Controller, Get} from '@nestjs/common';

@Controller('quotes') //define routes menjadi disini di controller
export class QuotesController {
    @Get() //routes define // jika sudah pakai controller tidak perlu difine seperti ini @Get("quotes")
    getQuotes() : {message:string} {
      return {message:"quotes"};
    }
}
