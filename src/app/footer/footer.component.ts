import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  checkbox_check: boolean = false;
  name_available: boolean = false;
  email_available: boolean = false;
  message_available: boolean = false;

  displayLine() {
    document.getElementById('line')?.classList.remove('d-none');
  }

  hideLine() {
    document.getElementById('line')?.classList.add('d-none');
  }

  nameUp() {
    document.getElementById('your-name')?.classList.add('move-up');
  }

  emailUp() {
    document.getElementById('your-email')?.classList.add('move-up');
  }

  messageUp() {
    document.getElementById('your-message')?.classList.add('move-up');
  }

  checkNameDown() {
    let name = document.getElementById('input-name') as HTMLInputElement;
    if (name.value.length == 0) {
      document.getElementById('your-name')?.classList.remove('move-up');
    } else {
      this.enableButton();
    }
  }

  checkEmailDown() {
    let email = document.getElementById('input-email') as HTMLInputElement;
    if (email.value.length == 0) {
      document.getElementById('your-email')?.classList.remove('move-up');
    } else {
      this.enableButton();
    }
  }

  checkMessageDown() {
    let message = document.getElementById('input-message') as HTMLTextAreaElement;
    if (message.value.length == 0) {
      document.getElementById('your-message')?.classList.remove('move-up');
    } else {
      this.enableButton();
    }
  }

  setCheck() {
    let please = document.getElementById('please');
    let button = document.getElementById('button') as HTMLInputElement;
    if (!this.checkbox_check) {
      this.checkbox_check = true;
      button.disabled = false;
      please?.classList.add('d-none');
    }
  }

  checkPolicyAndInputs() {
    let please = document.getElementById('please');
    if (!this.name_available) {
      this.checkInputNameForContent();
    } else if (!this.email_available) {
      this.checkInputEmailForContent();
    } else if (!this.message_available) {
      this.checkInputMessageForContent();
    } else if (!this.checkbox_check) {
      please?.classList.remove('d-none');
    } else {
      this.checkContentFirstAndSendMail();
    }
  }

  enableButton() {
    let button = document.getElementById('button') as HTMLInputElement;
    button.disabled = false;
  }

  onAcceptEnableButton() {
    let checkbox = document.getElementById('checkbox') as HTMLInputElement;
    let button = document.getElementById('button') as HTMLInputElement;
    if (checkbox.checked && button.disabled) {
      button.disabled = false;
    } else if (!checkbox.checked && !button.disabled) {
      button.disabled = true;
    }
  }

  checkInputNameForContent() {
    let name = document.getElementById('input-name') as HTMLInputElement;
    let required = document.getElementById('name-required');
    let img_missing = document.getElementById('img-name-missing');
    let img_check = document.getElementById('img-name-check');

    if (name.value.length == 0) {
      required?.classList.remove('d-none');
      img_missing?.classList.remove('d-none');
      img_check?.classList.add('d-none');
    } else if (name.value.length !== 0) {
      required?.classList.add('d-none');
      img_missing?.classList.add('d-none');
      img_check?.classList.remove('d-none');
      this.name_available = true;
    }
  }

  checkInputEmailForContent() {
    let email = document.getElementById('input-email') as HTMLInputElement;
    let required = document.getElementById('email-required');
    let img_missing = document.getElementById('img-email-missing');
    let img_check = document.getElementById('img-email-check');

    if (email.value.length == 0 || !email.value.includes('@')) {
      required?.classList.remove('d-none');
      img_missing?.classList.remove('d-none');
      img_check?.classList.add('d-none');
    } else if (email.value.length !== 0 || email.value.includes('@')) {
      required?.classList.add('d-none');
      img_missing?.classList.add('d-none');
      img_check?.classList.remove('d-none');
      this.email_available = true;
    }
  }

  checkInputMessageForContent() {
    let message = document.getElementById('input-message') as HTMLInputElement;
    let required = document.getElementById('message-required');
    let img_missing = document.getElementById('img-message-missing');
    let img_check = document.getElementById('img-message-check');

    if (message.value.length == 0) {
      required?.classList.remove('d-none');
      img_missing?.classList.remove('d-none');
      img_check?.classList.add('d-none');
    } else if (message.value.length !== 0) {
      required?.classList.add('d-none');
      img_missing?.classList.add('d-none');
      img_check?.classList.remove('d-none');
      this.message_available = true;
    }
  }

  async sendMail(event: any) {
    event.preventDefault();
    let input_name = document.getElementById('input-name') as HTMLInputElement;
    let input_message = document.getElementById('input-message') as HTMLInputElement;
    let input_email = document.getElementById('input-email') as HTMLInputElement;

    //animation anzeigen

    let fd = new FormData();
    fd.append('name', input_name.value);
    fd.append('message', input_message.value);
    fd.append('email', input_email.value);

    await fetch('https://ersan-bihorac.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );
    //text anzeigen: nachricht gesendet
  }

  checkContentFirstAndSendMail() {
    let form = document.getElementById('form') as HTMLFormElement;
    if (this.message_available && this.email_available && this.name_available) {
      form.submit();
    }
  }
}
