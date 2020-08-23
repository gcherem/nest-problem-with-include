import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';


@Module({
  imports: [
    AdminModule,
    PublicModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      path: '/admin',
      typePaths: ['src/admin/**/*.gql'],
      include: [AdminModule],
      definitions: {
        path: join(process.cwd(), 'src/admin/graphql.schema.generated.ts'),
        outputAs: 'class',
      },
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      path: '/public',
      typePaths: ['src/public/**/*.gql'],
      include: [PublicModule],
      definitions: {
        path: join(process.cwd(), 'src/public/graphql.schema.generated.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [],
})
export class AppModule {}