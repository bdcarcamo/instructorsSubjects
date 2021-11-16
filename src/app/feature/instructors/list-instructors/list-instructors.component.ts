import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-instructors',
  templateUrl: './list-instructors.component.html',
  styleUrls: ['./list-instructors.component.scss']
})
export class ListInstructorsComponent implements OnInit {

  view = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  viewIcon(){
    this.view = !this.view;
  }

  instructorDetail(){
    this.router.navigate(['instructors/instructor-detail']);
  }

}
