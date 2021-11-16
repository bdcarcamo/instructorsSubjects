
// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListInstructorsComponent } from './list-instructors/list-instructors.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';

const routes: Routes = [
  { path: 'list-instructors', component: ListInstructorsComponent },
  { path: 'list-subjects', component: ListSubjectsComponent },
  { path: 'instructor-detail', component: InstructorDetailComponent },
  { path: 'subject-detail', component: SubjectDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/instructors/list-instructors' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
