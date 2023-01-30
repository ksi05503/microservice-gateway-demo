import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as env from './env'
import {installCommunityProxy} from "./proxy";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  installCommunityProxy(app);

  await app.listen(3000);
}
bootstrap();
