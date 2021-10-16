import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'signin',component:SigninComponent},
  {path:'about',component:AboutComponent},
  
 // { path: '', redirectTo: 'view-student', pathMatch: 'full' },

  // { path: 'view-student', component: StudentListComponent },

  // { path: 'add-student', component: AddStudentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
