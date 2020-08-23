import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { User } from '../graphql.schema.generated';

@Resolver('User')
export class UsersResolver {
  
  @Query()
  user(@Args('id') id: string) {
    return { id: '1', name: 'worked', email: 'worked', password: 'worked' };
  }
}
