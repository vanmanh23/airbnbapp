import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

let cachedApp = null; // Sử dụng để lưu trữ app và tránh tạo lại
// Hàm tạo ứng dụng NestJS
async function createApp() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.init();
  return app;
}
// 
// khi chạy trên localhost thì mở comment code này nếu deploy thì commment nó lại.
async function bootstrap() {
  const port = 3000;
  const app = await createApp();
  await app.listen(port);
  console.log(`App is running on http://localhost:${port}`);
}
bootstrap();
// 
// Hàm handler cho Vercel
export default async function handler(req, res) {
  if (!cachedApp) {
    cachedApp = await createApp(); // Khởi tạo ứng dụng nếu chưa có
  }
  const instance = cachedApp.getHttpAdapter().getInstance();
  return instance(req, res); // Xử lý request
}
