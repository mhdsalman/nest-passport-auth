import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      username: 'user1',
      password: 'admin',
      email: 'user1@gmail.com',
    },
    {
      username: 'user2',
      password: 'admin',
      email: 'user2@gmail.com',
    },
    {
      username: 'user3',
      password: 'admin',
      email: 'user3@gmail.com',
    },
  ];

  getUserByName(userName: string): User {
    return this.users.find((user) => user.username === userName);
  }
}
