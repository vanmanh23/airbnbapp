// // src/pipes/validation.pipe.ts

// import {
//   ArgumentMetadata,
//   BadRequestException,
//   Injectable,
//   PipeTransform,
// } from '@nestjs/common';
// import { plainToClass } from 'class-transformer';
// import { validate } from 'class-validator';

// @Injectable()
// export class ValidationPipe implements PipeTransform<any> {
//   async transform(value: any, { metatype }: ArgumentMetadata) {
//     if (!metatype || !this.toValidate(metatype)) {
//       return value;
//     }
//     const object = plainToClass(metatype, value);
//     const errors = await validate(object);
//     if (errors.length > 0) {
//       throw new BadRequestException('Validation failed');
//     }
//     return value;
//   }

//   private toValidate(metatype: (...args: any[]) => any): boolean {
//     const types: (
//       | typeof String
//       | typeof Boolean
//       | typeof Number
//       | typeof Array
//       | typeof Object
//     )[] = [String, Boolean, Number, Array, Object];
//     return !types.includes(metatype);
//   }
// }
