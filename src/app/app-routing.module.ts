import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogsListComponent } from './pages/dogs-list/dogs-list.component';

/**
 * * Lazy load a un componente Standalone
 * * ************************************
 * * La nueva funcionalidad en el Router de Angular permite la 
 * * carga diferida (Lazy load) y la división de código en un 
 * * nivel de componente. 
 * *
 * * En este ejemplo, se hace uso del Lazy load aplicado
 * * al componente Standalone DogViewComponent.
 */

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: DogsListComponent },
  {
    path: 'details/:index',
    loadComponent: () => import('./pages/dog-view/dog-view.component').then(m => m.DogViewComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
