import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
    @Get()
    getHome(){
        return {message: `this is home page`};
    }
}
