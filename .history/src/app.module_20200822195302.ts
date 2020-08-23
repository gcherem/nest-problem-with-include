import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { CatalogModule } from './catalog/catalog.module';
import { TenantModule } from './tenant/tenant.module';


@Module({
  imports: [
    CatalogModule,
    TenantModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      path: '/private',
      typePaths: ['src/catalog/**/*.gql'],
      include: [CatalogModule],
      definitions: {
        path: join(process.cwd(), 'src/catalog/graphql.schema.generated.ts'),
        outputAs: 'class',
      },
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      path: '/graphql',
      typePaths: ['src/tenant/**/*.gql'],
      include: [TenantModule],
      definitions: {
        path: join(process.cwd(), 'src/tenant/graphql.schema.generated.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [],
})
export class AppModule {}