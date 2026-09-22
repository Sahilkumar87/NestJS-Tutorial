import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService {
    getStore(){
        return ['Mobile', 'Laptop', 'Tablet'];
    }
}
