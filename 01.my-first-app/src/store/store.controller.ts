import { Controller, Get } from '@nestjs/common';
import { StoreService } from './store.service.js';

@Controller('store')
export class StoreController {
    constructor(private readonly storeService: StoreService){}
    @Get()
    getAllStores(){
        return this.storeService.getStore();
    }

    
}
