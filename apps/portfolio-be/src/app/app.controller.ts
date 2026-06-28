import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('/send-email')
  async sendEmail(@Body() sendEmailDto: SendEmailDto) {
    await this.appService.sendMail(sendEmailDto);

    return {
      success: true,
      message: 'Email sent successfully.',
    };
  }
}
