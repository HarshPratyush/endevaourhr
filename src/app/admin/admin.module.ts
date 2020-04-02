import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddIndustryComponent } from './add-industry/add-industry.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FileDragDirective } from '../static/file-drag.directive';
import { StaticModule } from '../static/static.module';
import { AddDivisionComponent } from './add-division/add-division.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { JobSeekersComponent } from './job-seekers/job-seekers.component';
import { ConfirmationDialogComponent } from '../static/confirmation-dialog/confirmation-dialog.component';
import { SearchPipe } from './search.pipe';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddIndustryComponent, AddDivisionComponent, ManageJobsComponent,JobSeekersComponent, SearchPipe],
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
    StaticModule,
    MatExpansionModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],entryComponents:[ConfirmationDialogComponent]
})
export class AdminModule { }
