import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class UserMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(`Request... ${req.method} ${req.originalUrl}`);
    next();
  }
}
