// // import 'dotenv/config';

// // import { writeFile } from 'node:fs/promises';

// // import { ValidationError } from '@nestjs/class-validator';
// import {
//   Logger,
//   // PreconditionFailedException,
//   // ValidationPipe,
// } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// // import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// import { AppModule } from './app.module';
// // import { AllExceptionsHandler } from 'utils/AllExceptionsHandler';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, { cors: true });
//   const logger = new Logger(bootstrap.name);

//   // app.enableShutdownHooks();

//   // app.useGlobalPipes(
//   //   new ValidationPipe({
//   //     whitelist: true,
//   //     transform: true,
//   //     enableDebugMessages: true,
//   //     exceptionFactory: (validationErrors: ValidationError[] = []) => {
//   //       throw new PreconditionFailedException(validationErrors);
//   //     },
//   //   }),
//   // );

//   // const httpRef = app.get(HttpAdapterHost);
//   // app.useGlobalFilters(
//   //   new AllExceptionsHandler(httpRef.httpAdapter.getHttpServer()),
//   // );

//   // const config = new DocumentBuilder()
//   //   .setTitle('NestJS example')
//   //   .setDescription('The NestJS API description')
//   //   .setVersion('1.0')
//   //   .addBearerAuth()
//   //   .addSecurityRequirements('bearer')
//   //   .build();

//   // const document = SwaggerModule.createDocument(app, config, {});

//   // if (process.env.NODE_ENV === 'dev')
//   //   writeFile('public/swagger.json', JSON.stringify(document));

//   await app.listen(
//     "https://airbnbserverversion2.vercel.app/" || 3000,
//     async () => {
//       const url = await app.getUrl();
//       logger.log(`Server is running in ${url}`);
//     },
//   );
// }

// bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
