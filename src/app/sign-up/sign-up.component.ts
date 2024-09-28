import { JsonPipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomvalidatorService } from '../customvalidator.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgClass],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  fb = inject(FormBuilder);
  customvalidator = inject(CustomvalidatorService);

  signUp = this.fb.group(
    {
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
    },
    {
      validator: this.customvalidator.passwordMatchValidator(
        'password',
        'confirmPassword'
      ),
    }
  );

  // ngOnInit(): void {
  //   this.signUp = new FormGroup({
  //     username: new FormControl(''),
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl(''),
  //     address: new FormGroup({
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       zip: new FormControl(''),
  //     }),
  //   });
  // }

  submit() {
    this.signUp.patchValue({
      address: {
        state: 'ES',
      },
    });
    console.log(this.signUp.value);
  }
}
