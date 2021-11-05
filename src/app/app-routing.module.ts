import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { PocketComponent } from './pocket/pocket.component';
import { RegisterComponent } from './register/register.component';
import { RemindersComponent } from './reminders/reminders.component';
import { UserComponent } from './user/user.component';




const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},  
  {path:"reminders",component:RemindersComponent},
  {path:"pocket",component:PocketComponent},
  {path:"tasks",component:TasksComponent},
  {path:"User",component:UserComponent}
  
 

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };