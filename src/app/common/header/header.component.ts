import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap,catchError } from 'rxjs/operators';

@Component({
  selector: 'najah-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router,private titleService:Title,private activatedRoute: ActivatedRoute) {
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
  }

}


