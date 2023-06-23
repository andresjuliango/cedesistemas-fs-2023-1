import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UI/components/home/home.component';
import { ContactusComponent } from './UI/components/contactus/contactus.component';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { LoginComponent } from './UI/components/login/login.component';

const routes: Routes = [
  {path: "", component:DefaultComponent, children: [
    {path: "", component:HomeComponent}
  ]},
  {path: "contact", component:ContactusComponent},
  {path: "login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
