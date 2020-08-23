import { Injectable } from '@nestjs/common';
import { User, NewUserInput } from '../graphql.schema.generated';
// import { NewUserInputDto } from './new-user-input.dto';
// import { UsersArgs } from './user-args.dto';

@Injectable()
export class UsersService {
      async create(data: NewUserInput): Promise<User> {
        console.log(data)
        // return {} as any;
        return { id: 'aaa', name: 'aaa', email: 'aaa', password: 'aaa'};
      }
    
      async findOneById(id: string): Promise<User> {
        return {} as any;
      }
    
      async findAll(recipesArgs: UsersArgs): Promise<User[]> {
        return [] as User[];
      }
    
      async remove(id: string): Promise<boolean> {
        return true;
      }
}
