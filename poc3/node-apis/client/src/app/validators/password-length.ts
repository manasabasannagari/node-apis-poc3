import { AbstractControl } from '@angular/forms';

export function validatePassword(control: AbstractControl) {
  // console.log(control.value.length);
  if (control.value.length < 6) {
    return { length: true };
  } else {
    return null;
  }

}
