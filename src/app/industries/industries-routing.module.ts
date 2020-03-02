import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustriesMainComponent } from './industries-main/industries-main.component';
import { SingleIndustryComponent } from './single-industry/single-industry.component';
import { JobSeekerComponent } from '../static/job-seeker/job-seeker.component';


const routes: Routes = [
  {
    path:'',
    component:IndustriesMainComponent,
    pathMatch:'full',
    data:{title : 'Industries' } 
  },
  {
    path:':servicename',
    component:SingleIndustryComponent,
    pathMatch:'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }
