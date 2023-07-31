import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { DefaultComponent } from './default.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ContactusComponent } from '../../components/contactus/contactus.component';
import { ContactanosComponent } from '../../components/contactanos/contactanos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductdetailComponent } from '../../components/productdetail/productdetail.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactusComponent,
    ContactanosComponent,
    ProductdetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
