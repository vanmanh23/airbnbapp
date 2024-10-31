import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

// const origin = process.env.NODE_ENV === 'prod' ? ['https://airbnbapp-web.vercel.app'] : ['http://localhost:3000'];

export const corsOptions: CorsOptions = {
  origin: [
    'http://localhost:3000',
    'https://airbnbapp-web.vercel.app',
    'http://localhost:5173',
  ],
  methods: ['GET', 'OPTIONS', 'PATCH', 'DELETE', 'POST', 'PUT'],
  allowedHeaders: [
    'X-CSRF-Token', 'X-Requested-With', 'Accept',
    'Accept-Version', 'Content-Length', 'Content-MD5',
    'Content-Type', 'Date', 'X-Api-Version',
    'Authorization',
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};