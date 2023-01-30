import { CACHE_MANAGER, Controller, Get, Post,Inject, Body } from '@nestjs/common';
import { Cache } from 'cache-manager'
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,) {}

  @Post('sign-in')
  async signIn(){}
}
