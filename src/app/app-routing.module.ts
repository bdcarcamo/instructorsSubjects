
// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MAIN = '/instructors'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/feature.module').then( m => m.FeatureModule )
  },
  { path: '', redirectTo: MAIN, pathMatch: 'full' },
  { path: '**', redirectTo: MAIN, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
