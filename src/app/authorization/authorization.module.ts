import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormsModule} from '@angular/forms'
import { AuthComponent } from './authorization.component'
import { LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    FormBuilder
  ],
  exports: [
    AuthComponent,
  ]
})
export class AuthorizationModule { }
