import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { MarketDashboardModule } from "./market-dashboard/market-dashboard.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //angular modules
    BrowserModule,
    AppRoutingModule,
    //Costume modules
    MarketDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
