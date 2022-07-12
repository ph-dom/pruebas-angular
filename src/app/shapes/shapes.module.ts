import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ShapesRoutingModule } from './shapes-routing.module';

import { ListaComponent } from './pages/lista/lista.component';
import { CrearComponent } from './pages/crear/crear.component';

@NgModule({
  declarations: [
    ListaComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShapesRoutingModule
  ]
})
export class ShapesModule { }
