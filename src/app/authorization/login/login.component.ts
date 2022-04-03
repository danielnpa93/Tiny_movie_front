import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  rForm: FormGroup;
  form = [
    {
      label:'Username',
      name:'username',
      type: 'text'
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password'
    },
  ]

  constructor( private fb: FormBuilder ) {
    this.rForm = this.fb.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogin(){

    if(this.rForm.valid){
      this.isLoading = true;
      setTimeout(() => this.isLoading = false, 2000);
      return;
    }
    this.rForm.markAllAsTouched();
  }

}
