import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

export class SendEmailDto {
  @IsString()
  @MaxLength(100)
  senderName!: string;

  @IsEmail()
  senderEmail!: string;

  @IsString()
  @MaxLength(400)
  senderMessage!: string;

  @IsOptional()
  @IsString()
  senderWebsite?: string;
}
