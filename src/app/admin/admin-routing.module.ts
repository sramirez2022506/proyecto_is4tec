import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
