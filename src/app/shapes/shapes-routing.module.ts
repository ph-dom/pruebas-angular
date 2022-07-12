import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'crear', component: CrearComponent },
      { path: 'listar', component: ListaComponent },
      { path: '**', redirectTo: 'listar' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ShapesRoutingModule { }
