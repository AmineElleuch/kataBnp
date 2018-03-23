import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductService } from './service/product.service';
import { HeaderComponent } from './component/header/header.component';
import { ClientService } from './service/client.service';
import { BasketService } from './service/basket.service';
import { BasketComponent } from './component/basket/basket.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ProductService,
    ClientService,
    BasketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

