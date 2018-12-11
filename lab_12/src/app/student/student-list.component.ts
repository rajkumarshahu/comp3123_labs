import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {

  students: any[]; 
  constructor() { 
    console.log('student-list called');
  }

  ngOnInit() {
  
    console.log('OnInit');
    this.students = [
      { FirstName: 'Tej', LastName: 'Subedi', StudentNo: 19},
      { FirstName: 'Pushpa', LastName: 'Dulal', StudentNo: 24},
      { FirstName: 'Amir', LastName: 'Morteza', StudentNo: 22},
    ]
  }

}
