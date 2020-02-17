import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './static/home/home.component';
import { AboutUsComponent } from './static/about-us/about-us.component';
import { ContactUsComponent } from './static/contact-us/contact-us.component';
import { UnderConstructionComponent } from './static/under-construction/under-construction.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
  data:{title : 'Najah-Home' }
},
  {
    path: 'about-us',
    component: AboutUsComponent,
    pathMatch: 'full',
    data:{title : 'Najah-About Us' },
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full',
    data:{title : 'Najah-Contact Us' }
  },
  {
    path: 'under-construction',
    component: UnderConstructionComponent,
    pathMatch: 'full',
    data:{title : 'Najah Construction' }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
