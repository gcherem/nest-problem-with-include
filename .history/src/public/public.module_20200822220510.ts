import { Module } from '@nestjs/common';

import { UsersModule } from './projects/users.module';

@Module({
  imports: [
      UsersModule, 
    ],
})
export class AdminModule {}

