import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  // app.useGlobalPipes(new ValidationPipe());
  console.log('server started on ' + 5000)
  await app.listen(5000,);
}
bootstrap();
