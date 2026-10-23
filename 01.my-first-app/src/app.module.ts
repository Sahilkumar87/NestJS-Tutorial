import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserController } from './user/user.controller.js';
import { ProductService } from './product/product.service.js';
import { ProductController } from './product/product.controller.js';
import { EmployeeModule } from './employee/employee.module.js';
import { TestController } from './test/test.controller.js';
import { TestService } from './test/test.service.js';
import { StoreModule } from './store/store.module.js';
import { StudentModule } from './student/student.module.js';
import { CustomerModule } from './customer/customer.module.js';
import { MynameController } from './myname/myname.controller.js';
import { UserRolesController } from './user-roles/user-roles.controller.js';
import { ExceptionController } from './exception/exception.controller.js';
import { PipesConsumer } from '@nestjs/core/internal';
import { LoggerMiddleware } from './middleware/logger/logger.middleware.js';
import { DatabaseService } from './database/database.service.js';
import { DatabaseController } from './database/database.controller.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'my-first-app',
    }),
    EmployeeModule,
    StoreModule,
    StudentModule,
    CustomerModule,
  ],
  controllers: [AppController, UserController, ProductController, TestController, MynameController, UserRolesController, ExceptionController, DatabaseController,],
  providers: [AppService, ProductService, TestService, DatabaseService],
})
export class AppModule implements NestModule {
configure(consumer: MiddlewareConsumer){
  consumer.apply(LoggerMiddleware).forRoutes('*');
}
}