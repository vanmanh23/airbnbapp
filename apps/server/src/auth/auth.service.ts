import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from '../../src/users/dto/users.dto';
import { UsersService } from '../../src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import 'dotenv/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
    // private configService: ConfigService,
  ) {}

  async register(requestBody: CreateUserDto) {
    //check the email is exist
    const userByEmail = await this.userService.findByEmail(requestBody.email);
    if (userByEmail) {
      throw new Error('Email already exists');
    }
    //hash the password
    const hashedPassword = await bcrypt.hash(requestBody.password, 10);
    requestBody.password = hashedPassword;
    //save the user to db
    const saveUser = await this.userService.createUser(requestBody);
    //generate jwt token
    const payload = {
      id: saveUser.id,
      email: saveUser.email,
      password: saveUser.password,
      isEmailVerified: saveUser.isEmailVerified,
    };
    const access_tocken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
    // send verification email
    await this.sendVerificationEmail(saveUser.email, access_tocken);
    return {
      msg: `User has been created`,
      access_tocken,
    };
  }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(requestBody: LoginUserDto) {
    const user = await this.userService.findByEmail(requestBody.email);
    //check if user exist
    if (!user) {
      throw new Error('User not found');
    }
    //check if email is verified
    if (!user.isEmailVerified) {
      throw new Error('Email not verified');
    }
    //check if password is correct
    const isPasswordMatch = await bcrypt.compare(
      requestBody.password,
      user.password,
    );
    if (!isPasswordMatch) {
      throw new Error('Password is incorrect');
    }
    //generate jwt token
    const payload = {
      id: user.id,
      email: user.email,
      password: user.password,
      isEmailVerified: user.isEmailVerified,
    };
    const access_tocken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
    return {
      msg: `User has been logged in`,
      access_tocken,
    };
  }
  async sendVerificationEmail(email: string, token: string) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    const mailOptions = {
      from: `"Verify Your Email" <${process.env.EMAIL}>`,
      to: email,
      subject: 'Verify Your Email',
      html: `
             <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
                  <table align="center" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <img 
                          style="width: 100px; height: 100px;" 
                          src="https://assets-global.website-files.com/6578347dd606bf1b81234f79/65806659775367eb2f2f0101_1492692368-7email_83536.png" 
                          alt="Email Verification" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1 style="color: #333;">Verify your email address</h1>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="font-size: 16px; color: #555;">
                          Thank you for registering. Please click the button below to verify your email address.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 20px;">
                        <a href="${process.env.BASE_URL}/users/auth/verify?token=${token}" 
                          style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
                          Verify Email
                        </a>
                      </td>
                    </tr>
                  </table>
              </div>
            `,
    };

    await transporter.sendMail(mailOptions);
  }

  async verifyEmail(token: string) {
    const decoded = this.jwtService.verify(token);
    const user = await this.userService.findByEmail(decoded.email);
    if (!user) throw new Error('User not found');
    if (user.isEmailVerified) throw new Error('Email already verified');

    await this.userService.verifyEmail(decoded.email);
    return { message: 'Email verified successfully' };
  }
  async verifyToken(token: string) {
    const decoded = this.jwtService.verify(token);
    const user = await this.userService.findByEmail(decoded.email);
    if (!user) throw new Error('User not found');
    return user;
  }
}
