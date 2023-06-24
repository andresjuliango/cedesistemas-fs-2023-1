import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UI/components/home/home.component';
import { ContactusComponent } from './UI/components/contactus/contactus.component';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { LoginComponent } from './UI/components/login/login.component';
import { FullscreenComponent } from './UI/layouts/fullscreen/fullscreen.component';
import { RegisterComponent } from './UI/components/register/register.component';
import { DefaultGuard } from './UI/shared/guards/default.guard';

const routes: Routes = [
  {path: "", component:DefaultComponent,
  canActivate: [DefaultGuard],
  children: [
    {
      path: "", component:HomeComponent
    },
    {
      path: "", component:ContactusComponent
    }
  ]},
  {
    path: "fullscreen", component:FullscreenComponent,
    children: [
      {
        path: "login", component:LoginComponent
      },
      {
        path: "register", component:RegisterComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
