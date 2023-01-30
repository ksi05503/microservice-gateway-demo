import {CACHE_MANAGER, Inject, Injectable} from '@nestjs/common';
import { Cache } from "cache-manager";
import {User} from "../types";

@Injectable()
export class UsersService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) { }

    async getUserWithSession(userId: string): Promise<User | null>{
        const sessionKey = `demo-web:${userId}`;

        return this.cacheManager.get<User>(sessionKey);
    }

    async getUserByToken(token: string): Promise<User> {
        // ...
        return {
            id: 'blabla',
        }
    }

    async setUserInSession(): Promise<void>{
        // ...
    }
}
