import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

 async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.enableCors({
  //   credentials: true,
  //   origin: true,
  // });
  // app.use((req, res, next) => {
  //   res.setTimeout(30 * 1000); // 30 seconds timeout
  //   next();
  // });
  await app.listen(3000);
  return app;
}
bootstrap();
// Export a function as the handler
export default async function handler(req, res) {
  const app = await bootstrap();
  await app.init(); // Initialize the app
  return app.getHttpAdapter().getInstance().handle(req, res); // Handle incoming requests
}