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
  @ViewChild('button') button!: ElementRef;
  @ViewChild('checkbox') checkbox!: ElementRef;
  nameFieldModel: string = '';
  nameFieldFocused: boolean = false;
  emailFieldFocused: boolean = false;
  messageFieldFocused: boolean = false;
  nameFieldUsed: boolean = false;
  emailFieldUsed: boolean = false;
  messageFieldUsed: boolean = false;
  buttonChecked: boolean = false;
  textAreaValue: string = '';

  toggleButton() {
    this.buttonChecked = !this.buttonChecked;
    if (this.buttonChecked) {
      this.button.nativeElement.disabled = false;
    } else {
      this.button.nativeElement.disabled = true;
    }
  }

  checkValue(field: string) {
    if (field == "nameField") {
      this.nameFieldUsed = true;
    } else if (field == "emailField") {
      this.emailFieldUsed = true;
    } else if (field == "messageField") {
      this.messageFieldUsed = true;
    }
  }

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

  resetForm() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let checkbox = this.checkbox.nativeElement;

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    this.nameFieldFocused = false;
    this.emailFieldFocused = false;
    this.messageFieldFocused = false;

    this.nameFieldUsed = false;
    this.emailFieldUsed = false;
    this.messageFieldUsed = false;

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;

    checkbox.checked = false;
    this.toggleButton();
  }

  msgAnimation() {
    let success = document.getElementById('success');
    success?.classList.remove('d-none');
    setTimeout(() => {
      success?.classList.add('d-none');
    }, 4000)
  }

  async sendMail() {
    // action = "https://ersan-bihorac.de/send_mail/send_mail.php"
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    //eventuell Animation anzeigen
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
    this.msgAnimation();
    this.resetForm();
  }
}
