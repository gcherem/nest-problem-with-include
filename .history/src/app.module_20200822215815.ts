import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { CatalogModule } from './admin/catalog.module';
// import { TenantModule } from './tenant/tenant.module';


@Module({
  imports: [
    // CatalogModule,
    // TenantModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      path: '/admin',
      typePaths: ['src/admin/**/*.gql'],
      include: [CatalogModule],
      definitions: {
        path: join(process.cwd(), 'src/admin/graphql.schema.generated.ts'),
        outputAs: 'class',
      },
    }),
    // GraphQLModule.forRoot({
    //   debug: true,
    //   playground: true,
    //   path: '/graphql',
    //   typePaths: ['src/tenant/**/*.gql'],
    //   include: [TenantModule],
    //   definitions: {
    //     path: join(process.cwd(), 'src/tenant/graphql.schema.generated.ts'),
    //     outputAs: 'class',
    //   },
    // }),
  ],
  controllers: [],
})
export class AppModule {}