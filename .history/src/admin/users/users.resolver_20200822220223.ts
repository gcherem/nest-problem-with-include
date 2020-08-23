import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { User } from '../graphql.schema.generated';

@Resolver('User')
export class UsersResolver {
  //   @Query('user')
  //   async user(@Args('id') id: string): Promise<User> {
  //     const user = await this.usersService.findOneById(id);
  //     if (!user) {
  //       throw new NotFoundException(id);
  //     }
  //     return user;
  //   }

  @Query()
  user(@Args('id') id: string) {
    return { id: '1', name: 'worked', email: 'worked', password: 'worked' };
  }

  //   @Query()
  //   users(
  //     @Args() usersArgs: UsersArgs): Promise<User[]> {
  //     return this.usersService.findAll(usersArgs);
  //   }

  @Mutation('addUser')
  async addUser(
    @Args('newUserInput') newUserInput: NewUserInputDto,
  ): Promise<User> {
    const user = await this.usersService.create(newUserInput);
    pubSub.publish('userAdded', { userAdded: user });
    return user;
  }

  @Mutation('removeUser')
  async removeUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }

  @Subscription()
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }
}
