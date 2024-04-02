import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';

import { User } from 'src/models/user.model';
import { UsersService } from 'src/services/users.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async user(@Args('ldap', { type: () => String }) ldap: string) {
    return this.usersService.findOneByLdap(ldap);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; ldap: string }): User {
    return this.usersService.findOneByLdap(reference.ldap);
  }
}
