import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
      { path: '**', redirectTo: 'signin' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class AuthRoutingModule { }
