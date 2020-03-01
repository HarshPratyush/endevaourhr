import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './static/home/home.component';
import { AboutUsComponent } from './static/about-us/about-us.component';
import { ContactUsComponent } from './static/contact-us/contact-us.component';
import { UnderConstructionComponent } from './static/under-construction/under-construction.component';
import { ServiceComponent } from './static/service/service.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
  data:{title : 'Home' }
},
  {
    path: 'about-us',
    component: AboutUsComponent,
    pathMatch: 'full',
    data:{title : 'About Us' },
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full',
    data:{title : 'Contact Us' }
  },
  {
    path: 'service',
    component: ServiceComponent,
    pathMatch: 'full',
    data:{title : 'Services' }
  },
  {
    path: 'under-construction',
    component: UnderConstructionComponent,
    pathMatch: 'full',
    data:{title : 'Under Construction' }
  },{
    path:'industries',
    loadChildren:() => import('./industries/industries.module').then(m => m.IndustriesModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
