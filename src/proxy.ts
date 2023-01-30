import { NestExpressApplication } from '@nestjs/platform-express';
import type { Handler } from 'express';
import * as httpProxy from 'http-proxy';
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./users/users.service";
import { communityApiBaseUrl } from './env'

export function installCommunityProxy(app: NestExpressApplication) {
    const authService = app.get(AuthService);
    const usersService =  app.get(UsersService);

    const proxy = httpProxy
        .createProxyServer({
            changeOrigin: true,
            target: communityApiBaseUrl,
        })


    const handler: Handler = async (req, res, next) => {
        try {
            const providerToken = req.headers['authorization'];
            const identityProvider = req.headers['idp']
            const userInProvider = await usersService.getUserByToken(providerToken);

            const user = await usersService.getUserWithSession(userInProvider.id);
            if(!user){
                throw new Error('no session exists')
            }

            const communityToken = await authService.issueJwt(user.id);

            proxy.web(
                req,
                res,
                {
                    headers: {
                        'idp': identityProvider,
                        authorization: `Bearer ${communityToken}`,
                    },
                },
                next,
            );
        } catch (err) {
            next(err);
        }
    };

    app.use('', handler);
}

