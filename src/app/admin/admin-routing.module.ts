import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIndustryComponent } from './add-industry/add-industry.component';
import { AddDivisionComponent } from './add-division/add-division.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { JobSeekersComponent } from './job-seekers/job-seekers.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [{
  path:'industry',
  component:AddIndustryComponent,
  pathMatch:'full',
  data:{title : 'Add-Industry',expectedAuthority:'industry' } ,
  canActivate: [AuthGuard]
},
{
  path:'division',
  component:AddDivisionComponent,
  pathMatch:'full',
  data:{title : 'Add-Division',expectedAuthority:'industry' } ,
  canActivate: [AuthGuard]
},
{
  path:'jobs',
  component:ManageJobsComponent,
  pathMatch:'full',
  data:{title : 'Manage-Jobs',expectedAuthority:'jobs' } ,
  canActivate: [AuthGuard]
},
{
  path:'jobSeekers',
  component:JobSeekersComponent,
  pathMatch:'full',
  data:{title : 'Resumes',expectedAuthority:'resume' } ,
  canActivate: [AuthGuard]
},
{
  path:'',
  component:LoginComponent,
  pathMatch:'full',
  data:{title : 'Login' } 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
