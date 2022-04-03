import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items: MenuItem[] = [
    {label: 'Logout', icon: 'pi pi-power-off',},
];

  constructor() {

  }

  ngOnInit(): void {
  
  }

}
