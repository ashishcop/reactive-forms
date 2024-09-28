import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomvalidatorService {
  constructor() {}

  passwordMatchValidator(
    ctrlParsswordName: string,
    ctrlConfirmPasswordName: string
  ) {
    return (formgroup: FormGroup): void | null => {
      console.log('service validator');
      const passwordCtrl = formgroup.controls[ctrlParsswordName];
      const confirmPasswordCtrl = formgroup.controls[ctrlConfirmPasswordName];
      formgroup.vali;
      if (!passwordCtrl || !confirmPasswordCtrl) {
        return null;
      }

      if (
        confirmPasswordCtrl.errors &&
        !confirmPasswordCtrl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (confirmPasswordCtrl.value !== confirmPasswordCtrl.value) {
        confirmPasswordCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordCtrl.setErrors(null);
      }
    };
  }
}
