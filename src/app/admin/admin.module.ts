import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddIndustryComponent } from './add-industry/add-industry.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FileDragDirective } from '../static/file-drag.directive';
import { StaticModule } from '../static/static.module';
import { AddDivisionComponent } from './add-division/add-division.component';


@NgModule({
  declarations: [AddIndustryComponent, AddDivisionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatCommonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StaticModule
  ]
})
export class AdminModule { }
