import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async sendMail(sendEmailDto: SendEmailDto) {
    const { senderName, senderEmail, senderMessage, senderWebsite } =
      sendEmailDto;

    const text = `
    You received a request from: ${senderName} | ${senderEmail} | ${senderWebsite ?? '-'},

    Message: ${senderMessage}    
    `;

    try {
      const result = await this.mailerService.sendMail({
        to: process.env.MAIL_USER,
        from: 'Portfolio Website',
        subject: 'New Request from your portfolio website',
        text: text,
      });

      return result;
    } catch (error) {
      console.error('error: ', error);
      throw error;
    }
  }
}
