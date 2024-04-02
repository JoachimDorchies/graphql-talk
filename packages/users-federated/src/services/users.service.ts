import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      ldap: '1',
      name: 'Aramis',
    },
    {
      ldap: '2',
      name: 'Athos',
    },
    {
      ldap: '3',
      name: "d'Artagnan",
    },
    {
      ldap: '4',
      name: 'Porthos',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOneByLdap(ldap: string): User {
    const user = this.users.find((user) => user.ldap === ldap);

    if (user) {
      return user;
    }

    throw new Error('User not found');
  }
}
