import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { StockComponent } from './stock/stock.component';
import { AvailablePipe } from './pipes/available.pipe';
import { MinMaxPipe } from './pipes/min-max.pipe';
import {AppRoutingModule} from "./app-routing.module";
import { AccueilComponent } from './accueil/accueil.component';
import { PariteComponent } from './parite/parite.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    StockComponent,
    AvailablePipe,
    MinMaxPipe,
    AccueilComponent,
    PariteComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
