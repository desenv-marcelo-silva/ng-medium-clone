import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { registerAction } from 'src/app/auth/components/store/actions';

@Component({
  selector: 'mc-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    console.log('initialize');
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.email],
    });
    this.store.dispatch(registerAction(this.form.value));
  }

  onSubmit(): void {
    console.log('submit', this.form.value, 'valid: ', this.form.valid);
  }
}
