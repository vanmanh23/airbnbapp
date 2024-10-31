// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import 'dotenv/config';

// let cachedApp = null; // Sử dụng để lưu trữ app và tránh tạo lại
// // Hàm tạo ứng dụng NestJS
// async function createApp() {
//   const app = await NestFactory.create(AppModule);
//    // Configure CORS
//    app.enableCors({
//     origin: [
//       'http://localhost:3000', 
//       'https://airbnbapp-web.vercel.app'  // Allow Vercel domain
//     ], 
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   });
//   await app.init();
//   return app;
// }
// // 
// // khi chạy trên localhost thì mở comment code này nếu deploy thì commment nó lại.
// // async function bootstrap() {
// //   const port = 3000 || process.env.PORT;
// //   const app = await createApp();
// //   await app.listen(port);
// //   console.log(`App is running on http://localhost:${port}`);
// // }
// // bootstrap();
// // 
// // Hàm handler cho Vercel
// export default async function handler(req, res) {
//   if (!cachedApp) {
//     cachedApp = await createApp(); // Khởi tạo ứng dụng nếu chưa có
//   }
//   const instance = cachedApp.getHttpAdapter().getInstance();
//   return instance(req, res); // Xử lý request
// }

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors({
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     origin: ['http://localhost:3000', 'https://airbnbapp-web.vercel.app'],
//   });
//   await app.listen(3000);
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { corsOptions } from './constants/cors';

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: corsOptions,
  });
  const port = 3000;

  await app.listen(port, () => console.log(`[Server started on port ${port}]`));
})();