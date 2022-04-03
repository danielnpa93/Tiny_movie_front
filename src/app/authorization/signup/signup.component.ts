import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  
  isLoading = false;
  rForm: FormGroup;
  form = [
    {
      label: 'Username',
      name: 'username',
      type: 'text'
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password'
    },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      type: 'password'
    }
  ]

  constructor( private fb: FormBuilder ) {
    this.rForm = this.fb.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
      confirmPassword: [undefined, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSignup(){

    if(this.rForm.valid){
      this.isLoading = true;
      setTimeout(() => this.isLoading = false, 2000);
      return;
    }
    this.rForm.markAllAsTouched();
  }

}
