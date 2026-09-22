import { Module } from '@nestjs/common';
import { StoreService } from './store.service.js';
import { StoreController } from './store.controller.js';

@Module({
  providers: [StoreService],
  controllers: [StoreController]
})
export class StoreModule {}
