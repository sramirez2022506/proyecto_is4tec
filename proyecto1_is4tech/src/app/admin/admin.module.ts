import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DogsComponent } from './dogs/dogs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
