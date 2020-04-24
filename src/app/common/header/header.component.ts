import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap,catchError } from 'rxjs/operators';
import { CommonService } from '../common.service';
import { UserService } from 'src/app/admin/authentication/api/user.service';
declare var $:any;

@Component({
  selector: 'najah-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public industries:any[]=[];
  constructor(public router:Router,private titleService:Title,private activatedRoute: ActivatedRoute,
    private commonService:CommonService,public userService:UserService) {
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

    $(function(){
      $(".dropdown").hover(            
              function() {
                  $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                  $(this).toggleClass('open');
                  $('b', this).toggleClass("caret caret-up");                
              },
              function() {
                  $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                  $(this).toggleClass('open');
                  $('b', this).toggleClass("caret caret-up");                
              });
      });
  }

  getAllIndustriesHeader(){
    this.commonService.getHeaders().subscribe(d=>{
      this.industries=d.data;
    })
  }

  routeToIndustry(industry ? : any){
    if(industry)
    this.router.navigate(["/industries",industry.url])
    else
    this.router.navigateByUrl("/industries")
  }

}


