import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
// import { AccountsModule } from './accounts/accounts.module';
// import { PlansModule } from './plans/plans.module';
// import { MembershipsModule } from './memberships/memberships.module';

@Module({
  imports: [
      UsersModule, 
      // AccountsModule, 
    //   PlansModule, 
    //   MembershipsModule
    ],
})
export class CatalogModule {}

