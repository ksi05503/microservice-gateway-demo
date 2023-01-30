import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async issueJwt(userId: string){
        // ...
        return 'blabla';
    }
}
