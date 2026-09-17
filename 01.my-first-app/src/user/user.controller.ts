import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('user') // Decorator
export class UserController {
    @Get()
    getUser(){
        return 'User data feteched successfully !';
    }
}
