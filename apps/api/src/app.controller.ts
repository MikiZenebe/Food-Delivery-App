import { Controller, Get, Inject } from '@nestjs/common';
import type { HealthCheckResponse } from '@food-delivery/types';
import type { Database } from './db/db.module.js';

@Controller()
export class AppController {
  constructor(@Inject('DB') private db: Database) {}

  @Get('health')
  health(): HealthCheckResponse {
    return {
      status: 'ok',
      timestamp: new Date(),
    };
  }
}
