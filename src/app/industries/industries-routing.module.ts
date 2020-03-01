import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustriesMainComponent } from './industries-main/industries-main.component';
import { SingleIndustryComponent } from './single-industry/single-industry.component';


const routes: Routes = [
  {
    path:'',
    component:IndustriesMainComponent,
    pathMatch:'full' 
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
