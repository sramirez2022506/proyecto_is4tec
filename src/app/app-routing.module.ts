import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { DogsComponent } from './admin/dogs/dogs.component'; */
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/dogs', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dogs', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
