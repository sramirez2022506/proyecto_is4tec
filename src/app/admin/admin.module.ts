import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */

/* import { AdminRoutingModule } from './admin-routing.module'; */
import { DogsComponent } from './dogs/dogs.component';
/* import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; */
import { DogsService } from './services/dogs.service';
import SharedModule from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {
    path: 'dogs',
    component: DogsComponent
  }
]


@NgModule({
  declarations: [DogsComponent ],
  imports: [
/*     CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule, */
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers:[DogsService],
  exports: [RouterModule]
})
export class AdminModule { }
