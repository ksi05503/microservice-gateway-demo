import { CACHE_MANAGER, Controller, Get, Post,Inject, Body } from '@nestjs/common';
import { Cache } from 'cache-manager'
import { UsersService } from './users.service';
import {SignInDto} from "./dtos/sign-in.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,) {}

  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto){
    // ... create session
  }
}
