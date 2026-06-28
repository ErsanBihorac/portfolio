import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { email } from '../interfaces/email.interface';
import { environment } from '../environments/environment';

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
    const url = environment.apiUrl + '/api/send-email';

    const body: email = {
      senderName: name,
      senderEmail: email,
      senderMessage: message,
    };

    if (website) body.senderWebsite = website;
    console.log('sent body: ', body);
    return this.http.post(url, body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
