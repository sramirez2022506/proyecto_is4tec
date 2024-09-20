import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DogsComponent } from './dogs.component'; 
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DogsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes) 
  ],
  declarations: [
    DogsComponent 
  ],
  exports: [RouterModule]
})
export class DogsModule { }
