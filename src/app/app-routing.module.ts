import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogsListComponent } from './pages/dogs-list/dogs-list.component';
import { DogViewComponent } from './pages/dog-view/dog-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogsListComponent },
  { path: 'details/:index', component: DogViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
