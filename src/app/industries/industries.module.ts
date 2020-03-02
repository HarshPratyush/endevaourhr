import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesMainComponent } from './industries-main/industries-main.component';
import { IndustryComponent } from './industry/industry.component';
import { SingleIndustryComponent } from './single-industry/single-industry.component';
import { SideNavDetailsComponent } from '../static/side-nav-details/side-nav-details.component';
import { StaticModule } from '../static/static.module';



@NgModule({
  declarations: [IndustriesMainComponent, IndustryComponent, SingleIndustryComponent],
  imports: [
    CommonModule,
    IndustriesRoutingModule,
    StaticModule
  ]
})
export class IndustriesModule { }
