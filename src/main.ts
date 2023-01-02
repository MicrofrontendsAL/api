import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDatabase } from 'typeorm-extension';

async function bootstrap() {
  await createDatabase({ ifNotExist: true });

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      '*',
      'http://127.0.0.1:4200',
      'http://localhost',
      'http://localhost:4200',
      'http://localhost:9000',
      'http://localhost:8080',
      'http://localhost:8081',
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders:
      'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-for,Set-Cookie,Access-Control-Allow-Origin',
  });

  await app.listen(3000);
}
bootstrap();
