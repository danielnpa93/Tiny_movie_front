import { Component, OnInit } from '@angular/core';

type View = 'login' | 'signup';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthComponent implements OnInit {

  view : View = 'login';

  constructor() { 
  }

  ngOnInit(): void {
  }

  onChangeView = () => {
    if(this.view == 'login'){
      this.view = 'signup';
      return;
    }
    this.view = 'login'
  }
}
