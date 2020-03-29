import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIndustryComponent } from './add-industry/add-industry.component';
import { AddDivisionComponent } from './add-division/add-division.component';


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
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
