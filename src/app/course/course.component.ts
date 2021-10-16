import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    
    {'id':1,'name':'Learn Java','description':'We are going to train on Java core,advance,Jdbc connectivity.','image':'../../assets/j1.png' },
    {'id':2,'name':'Learn Python','description':'We are going to train on python core,advance,databse connectivity.','image':'../../assets/p1.png'},
    {'id':3,'name':'Learn Angular','description':'we are going to train Angular instalation,components,rounting concepts.','image':'../../assets/angular1.png'},
    {'id':4,'name':'Learn Javascript','description':'we are going to train Javascript concepts, interview question.','image':'../../assets/js.png'},
    {'id':5,'name':'Learn Spring Boot','description':'we are going to train spring boot framework installation,spring concepts.','image':'../../assets/s1.png'},
    {'id':6,'name':'Learn PostgreSql','description':'we are going to train postgresql instalation,psql concepts. ','image':'../../assets/ps2.png'},
    {'id':7,'name':'Learn Django','description':'we are going to train Django framework installation,some project concepts . ','image':'../../assets/django.png'},
    {'id':8,'name':'Learn C++','description':'We are going to train on C++ core part,advanced part.','image':'../../assets/cp1.png'}
  ]
  
}
