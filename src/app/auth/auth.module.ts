import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { reducers } from 'src/app/auth/store/reducers';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { AuthService } from 'src/app/auth/services/auth.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];
@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers)],
  declarations: [RegisterComponent],
  providers: [AuthService]
})
export class AuthModule { }
