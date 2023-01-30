import {CacheModule, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [UsersModule, AuthModule, CacheModule.register({
    isGlobal: true,
    //@ts-ignore
    store: redisStore,
    host: 'localhost',
    port: 6379,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
