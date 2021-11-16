import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.scss']
})
export class InstructorDetailComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  instructors(){
    this.router.navigate(['instructors/instructors-list']);
  }

}
