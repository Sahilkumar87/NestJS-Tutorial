import { Injectable, NestMiddleware } from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}] - [${req.originalUrl}]`);
    next(); // -> use kerna h nhi toh req or res stuck ho jyga
  }
}
 