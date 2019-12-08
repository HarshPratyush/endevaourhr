import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './static/home/home.component';
import { AboutUsComponent } from './static/about-us/about-us.component';
import { ContactUsComponent } from './static/contact-us/contact-us.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
  data:{title : 'Endevaour-Home' }
},
  {
    path: 'about-us',
    component: AboutUsComponent,
    pathMatch: 'full',
    data:{title : 'Endevaour-About Us' },
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full',
    data:{title : 'Endevaour-Contact Us' },
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
