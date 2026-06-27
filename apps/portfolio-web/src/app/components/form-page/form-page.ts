import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { GlowingBtn } from '../glowing-btn/glowing-btn';
import { Button } from '../../interfaces/button.interface';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MailService } from '../../services/mail-service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-form-page',
  imports: [Navigation, GlowingBtn, Contact, Footer, FormsModule, CommonModule],
  templateUrl: './form-page.html',
  styleUrl: './scss/form-page.scss',
})
export class FormPage {
  mailService = inject(MailService);
  cdr = inject(ChangeDetectorRef);

  glowingBtn: Button = {
    text: 'Send Your Message',
    svg: {
      viewBox: '0 -960 960 960',
      path: 'm216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z',
    },
  };
  
  mail: string = 'contact@ebihorac.de';
  buttonBgColor: string = '';
  name: string = '';
  email: string = '';
  website: string = '';
  message: string = '';

  async submit(form: NgForm) {
    if (form.valid) {
      await this.sendRequest(form);
    } else {
      form.form.markAllAsTouched();
    }
  }

  async sendRequest(form: NgForm) {
    try {
      const response: any = await firstValueFrom(
        this.mailService.sendMail(this.name, this.email, this.message, this.website)
      );

      if (response.success) {
        this.submitSucceed(form);
      } else {
        this.submitFailed();
        console.error('Could not sent mail:', response.error);
      }
    } catch (error) {
      this.submitFailed();
      console.log('HTTP Error:', error);
    }
  }

  submitSucceed(form: NgForm) {
    this.buttonBgColor = '#060707';
    this.glowingBtn.text = 'Message sent!';
    form.resetForm();
    this.cdr.detectChanges();
  }

  submitFailed() {
    this.glowingBtn.text = 'Sending failed!';
    this.cdr.detectChanges();
  }
  
  openMail() {
    const subject = encodeURIComponent('Contact via Website');
    const body = encodeURIComponent('Hi,\n\n ...');

    window.location.href = `mailto:${this.mail}?subject=${subject}&body=${body}`;
  }
}
