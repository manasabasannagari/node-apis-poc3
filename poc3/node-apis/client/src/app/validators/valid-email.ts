import { AbstractControl } from '@angular/forms';

export function validateEmail(control: AbstractControl) {
  const email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  // console.log(control.value);
  if (email_regex.test(control.value)) {
    return null;
  }

  return {
    invalidEmail: true
  };
}
