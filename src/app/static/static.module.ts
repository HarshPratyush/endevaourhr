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
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FileDragDirective } from './file-drag.directive';
import { EmployerComponent } from './employer/employer.component';

@NgModule({
  declarations: [HomeComponent, ContactUsComponent, 
    AboutUsComponent, UnderConstructionComponent,
     ServiceComponent,IndustrySelectorComponent,SideNavDetailsComponent, BreadCrumbComponent,JobSeekerComponent, FileDragDirective, EmployerComponent],
  imports: [
    CommonModule,
    StaticRoutingModule,
    CarouselModule,
    MatIconModule,
    MatCommonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports:[SideNavDetailsComponent,BreadCrumbComponent,FileDragDirective],
  providers:[MatDatepickerModule]
})
export class StaticModule { }
