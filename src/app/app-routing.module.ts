import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FormsComponent } from './views/forms/forms.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'forms',
  component: FormsComponent
},{
  path: '**',
  component: NotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
