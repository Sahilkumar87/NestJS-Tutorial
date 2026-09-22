import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCategories(){
        return ['poco', 'oppo', 'infinx'];
    }
}
