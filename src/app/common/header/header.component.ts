import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap,catchError } from 'rxjs/operators';
import { CommonService } from '../common.service';

@Component({
  selector: 'najah-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public industries:any[]=[];
  constructor(public router:Router,private titleService:Title,private activatedRoute: ActivatedRoute,
    private commonService:CommonService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
       map((route) => {
         while (route.firstChild) {
          route = route.firstChild;
          };
   
        return route;
       }),
        filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
      ).subscribe((event) => this.titleService.setTitle(event['title']));
   }

  ngOnInit() {
    this.getAllIndustriesHeader();
  }

  getAllIndustriesHeader(){
    this.commonService.getHeaders().subscribe(d=>{
      this.industries=d;
    })
  }

  routeToIndustry(industry ? : any){
    if(industry)
    this.router.navigate(["/industries",industry.url])
    else
    this.router.navigateByUrl("/industries")
  }

}


