import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { email } from '../interfaces/email.interface';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private http = inject(HttpClient);

  sendMail(
    name: string,
    email: string,
    message: string,
    website?: string,
  ): Observable<any> {
    // const url = environment.backendUrl + "/mailer/send-email/";
    const url = ''; //placeholder

    const body: email = { name, email, message };
    if (website) body.website = website;
    return this.http.post(url, body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
