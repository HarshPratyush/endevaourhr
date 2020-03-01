import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatIconModule} from '@angular/material/icon';
import { ServiceComponent } from './service/service.component';
import { IndustrySelectorComponent } from './industry-selector/industry-selector.component';
import { SideNavDetailsComponent } from './side-nav-details/side-nav-details.component';


@NgModule({
  declarations: [HomeComponent, ContactUsComponent, 
    AboutUsComponent, UnderConstructionComponent,
     ServiceComponent,IndustrySelectorComponent,SideNavDetailsComponent],
  imports: [
    CommonModule,
    StaticRoutingModule,
    CarouselModule,
    MatIconModule
  ],
  exports:[SideNavDetailsComponent]
})
export class StaticModule { }
