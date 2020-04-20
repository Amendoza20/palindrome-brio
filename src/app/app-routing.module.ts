import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component'
// import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'palindrome', component: ContentComponent },
  { path: '', component: HomeComponent},
  { path:'newuser', component: NewUserComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
