// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeInstructorComponent } from './instructors/home-instructor/home-instructor.component';

const routes: Routes = [
  {
    path: 'instructors',
    component: HomeInstructorComponent,
    loadChildren: () => import('./instructors/instructor.module').then( m => m.InstructorModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
