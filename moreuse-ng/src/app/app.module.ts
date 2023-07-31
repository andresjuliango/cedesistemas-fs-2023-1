import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layouts/default/default.module';
import { SharedModule } from './UI/shared/shared.module';
import { FullscreenModule } from './UI/layouts/fullscreen/fullscreen.module';
import { Usergateway } from './domain/models/User/gateway/usergateway';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ClothesGateway } from './domain/models/Clothes/gateway/clothesgateway';
import { MoreuseUserService } from './infraestructure/driven-adapter/services/moreuse-user/moreuse-user.service';
import { MoreuseClothesService } from './infraestructure/driven-adapter/services/moreuse-clothes/moreuse-clothes.service';
import { ProductdetailComponent } from './UI/components/productdetail/productdetail.component';
import { AuthInterceptor } from './infraestructure/driven-adapter/services/helpers/authinterceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullscreenModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: Usergateway, useClass: MoreuseUserService },
    { provide: ClothesGateway, useClass: MoreuseClothesService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }
  ],
  //{provide:ClothesGateway}
  bootstrap: [AppComponent]
})
export class AppModule { }
