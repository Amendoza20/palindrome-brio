import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component'
import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';


const routes: Routes = [
  { path: '', component: ContentComponent },
  { path:'login', component: NewUserComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
