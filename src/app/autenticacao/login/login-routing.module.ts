import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogarComponent, LoginComponent } from './components';

export const loginRoutes: Routes = [
  { 
    path: 'login', 
    component: LogarComponent,
    children: [{ path: '', component: LoginComponent}] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
