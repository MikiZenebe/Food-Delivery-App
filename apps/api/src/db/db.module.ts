import { neon } from '@neondatabase/serverless';
import { Module, Global } from '@nestjs/common';
import { defineRelations } from 'drizzle-orm';
import { drizzle, type NeonHttpDatabase } from 'drizzle-orm/neon-http';
import * as schema from './schema/index.js';

export const relations = defineRelations(schema);
export type Database = NeonHttpDatabase<typeof relations>;

@Global()
@Module({
  providers: [
    {
      provide: 'DB',
      useFactory: (): Database => {
        const sql = neon(process.env.DATABASE_URL!);
        return drizzle({ client: sql, relations });
      },
    },
  ],
  exports: ['DB'],
})
export class DbModule {}
