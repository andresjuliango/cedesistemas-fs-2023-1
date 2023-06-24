import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layouts/default/default.module';
import { SharedModule } from './UI/shared/shared.module';
import { FullscreenModule } from './UI/layouts/fullscreen/fullscreen.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    SharedModule,
    FullscreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
