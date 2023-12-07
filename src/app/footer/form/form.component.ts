import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('yourName') yourName!: ElementRef;
  @ViewChild('yourEmail') yourEmail!: ElementRef;
  @ViewChild('yourMessage') yourMessage!: ElementRef;
  nameFieldModel: string = '';
  nameFieldFocused: boolean = false;
  emailFieldFocused: boolean = false;
  messageFieldFocused: boolean = false;

  onFocus(field: any) {
    if (field == "nameFieldFocused") {
      this.nameFieldFocused = true;
    } else if (field == "emailFieldFocused") {
      this.emailFieldFocused = true;
    } else if (field == "messageFieldFocused") {
      this.messageFieldFocused = true;
    }
  }

  onBlur(field: any) {
    if (field == "nameFieldFocused" && this.nameField.nativeElement.value == 0) {
      this.nameFieldFocused = false;
    } else if (field == "emailFieldFocused" && this.emailField.nativeElement.value == 0) {
      this.emailFieldFocused = false;
    } else if (field == "messageFieldFocused" && this.messageField.nativeElement.value == 0) {
      this.messageFieldFocused = false;
    }
  }

  async sendMail() {
    // action = "https://ersan-bihorac.de/send_mail/send_mail.php"
    console.log(this.myForm);
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    //Animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    //senden
    await fetch('https://ersan-bihorac.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )
    //text anzeigen= Nachricht gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
  }
}
