import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authorization/authorization.component'
import { MainComponent } from './pages/main/main.component'


const routes: Routes = [
  {path:'authorization', component: AuthComponent},
  {path:'', component: MainComponent },
  {path:'**', redirectTo:'authorization'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
