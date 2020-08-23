import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

@Resolver('Project')
export class ProjectsResolver {
  
  @Query()
  project(@Args('id') id: string) {
    return { id: '1', name: 'worked' };
  }
}
