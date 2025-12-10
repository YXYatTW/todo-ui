/*
Spring Equivalent:
The class containing SpringApplication.run(App.class, args);.

Purpose:
This bootstraps the application.
It creates the Nest factory and listens on port 3000.
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
