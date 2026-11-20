import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend client
  const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';
  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  });

  // Global API routing prefix
  app.setGlobalPrefix('api');

  const port = process.env.API_PORT || 4000;
  await app.listen(port);
  console.log(`[LandClarity API] running on: http://localhost:${port}/api`);
}

bootstrap();
