
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';

// Custom Modules
import { InstructorModule } from './instructors/instructor.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    InstructorModule
  ]
})
export class FeatureModule { }
