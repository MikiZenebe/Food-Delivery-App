import { Controller, Get, Inject } from '@nestjs/common';
import type { HealthCheckResponse } from '@food-delivery/types';
import type { Database } from './db/db.module.js';
import { users } from './db/schema/index.js';

@Controller()
export class AppController {
  constructor(@Inject('DB') private db: Database) {}

  @Get('db-test')
  async dbTest() {
    const result = await this.db.select().from(users);
    return { users: result, count: result.length };
  }

  @Get('health')
  health(): HealthCheckResponse {
    return {
      status: 'ok',
      timestamp: new Date(),
    };
  }
}
