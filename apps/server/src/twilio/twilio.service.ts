// // src/twilio/twilio.service.ts
// import { Injectable } from '@nestjs/common';
// import { Twilio } from 'twilio';
// import 'dotenv/config';

// @Injectable()
// export class TwilioService {
//   private twilioClient: Twilio;

//   constructor() {
//     // Tạo một instance của Twilio với accountSid và authToken
//     this.twilioClient = new Twilio(
//       process.env.TWILIO_ACCOUNT_SID,
//       process.env.TWILIO_AUTH_TOKEN,
//     );
//   }

//   async sendSms(to: string, message: string) {
//     try {
//       const result = await this.twilioClient.messages.create({
//         body: message, // Nội dung tin nhắn
//         from: process.env.TWILIO_PHONE_NUMBER, // Số điện thoại từ Twilio
//         to: to, // Số điện thoại người nhận
//       });
//       console.log('SMS sent:', process.env.TWILIO_PHONE_NUMBER);
//       return result;
//     } catch (error) {
//       console.error('Error sending SMS:', error);
//       throw new Error('Failed to send SMS');
//     }
//   }
// }
