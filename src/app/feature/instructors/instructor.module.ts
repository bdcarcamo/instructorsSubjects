import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { HomeInstructorComponent } from './home-instructor/home-instructor.component';
import { NavbarInstructorComponent } from './navbar-instructor/navbar-instructor.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { ListInstructorsComponent } from './list-instructors/list-instructors.component';


@NgModule({
  declarations: [
    HomeInstructorComponent,
    NavbarInstructorComponent,
    InstructorDetailComponent,
    ListSubjectsComponent,
    SubjectDetailComponent,
    ListInstructorsComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule
  ]
})
export class InstructorModule { }
