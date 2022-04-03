import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    BrowserAnimationsModule
  ],
  exports: [
    MainComponent
  ]
})
export class PagesModule { }
