import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Containers
import { MarketDashboardComponent } from "./containers/market-dashboard/market-dashboard.component";
//Components
import { MarketListComponent } from "./components/market-list/market-list.component";
import { MarketFooterComponent } from "./components/market-footer/market-footer.component";
import { MarketHeaderComponent } from "./components/market-header/market-header.component";


//services

@NgModule({
  declarations: [
    MarketDashboardComponent,
    MarketListComponent,
    MarketFooterComponent,
    MarketHeaderComponent

  ],
  imports: [
    CommonModule
    ],
    exports: [
      MarketDashboardComponent
    ]
})

export class MarketDashboardModule {}