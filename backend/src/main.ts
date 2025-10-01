import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe(
    {
      transform: true, // para que el pipe transforme los datos
      whitelist: true, // para que el pipe elimine los datos que no esten en el dto
      forbidNonWhitelisted: true // para que el pipe lance un error si se envian datos que no esten en el dto
    }
  ));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
