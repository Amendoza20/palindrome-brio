import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';



const routes: Routes = [
  { path: '', component: ContentComponent },
  { path:'newuser', component: NewUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'demo', component: DemoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
