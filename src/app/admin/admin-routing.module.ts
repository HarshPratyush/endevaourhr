import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIndustryComponent } from './add-industry/add-industry.component';
import { AddDivisionComponent } from './add-division/add-division.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { JobSeekersComponent } from './job-seekers/job-seekers.component';


const routes: Routes = [{
  path:'industry',
  component:AddIndustryComponent,
  pathMatch:'full',
  data:{title : 'Add-Industry' } 
},
{
  path:'division',
  component:AddDivisionComponent,
  pathMatch:'full',
  data:{title : 'Add-Division' } 
},
{
  path:'jobs',
  component:ManageJobsComponent,
  pathMatch:'full',
  data:{title : 'Manage-Jobs' } 
},
{
  path:'jobs/archive',
  component:ManageJobsComponent,
  pathMatch:'full',
  data:{title : 'Manage-Jobs' } 
},
{
  path:'jobSeekers',
  component:JobSeekersComponent,
  pathMatch:'full',
  data:{title : 'Manage-Jobs' } 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
