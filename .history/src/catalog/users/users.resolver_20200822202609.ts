import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';

import { User } from '../graphql.schema.generated';
import { UsersService } from './users.service';
import { NewUserInputDto } from './new-user-input.dto';
// import { UsersArgs } from './user-args.dto';

const pubSub = new PubSub();

@Resolver('User')
export class UsersResolver {
  constructor(
    private usersService: UsersService) {}

  @Query('user')
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
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

  @Subscription('user')
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }
}
