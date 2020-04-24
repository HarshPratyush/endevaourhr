import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
declare var $:any;
@Component({
  selector: 'najah-side-nav-details',
  templateUrl: './side-nav-details.component.html',
  styleUrls: ['./side-nav-details.component.scss']
})
export class SideNavDetailsComponent implements OnInit {

  jobs:any;
  jobTitle:any[]=[];

   clients:{image:string,clientName:string,clientLocation:string,feedback:string}[]=[
     {
       "image":"./assets/images/algeemi.jpg",
       "clientName":"Al Geemi",
       "clientLocation":"Abu Dhabi",
       "feedback":"What a great company offering great services. Very professional, knowledgeable and efficient! Highly recommended. Najah Human Resources."
     },
     {
      "image":"./assets/images/innovation-logo.jpg",
      "clientName":"Innovationuae",
      "clientLocation":"Dubai",
      "feedback":"What a great company offering great services. Very professional, knowledgeable and efficient! Highly recommended. Najah Human Resources."
    },
    {
      "image":"./assets/images/liberty.png",
      "clientName":"Liberty Building Systems",
      "clientLocation":"Sharjah",
      "feedback":"What a great company offering great services. Very professional, knowledgeable and efficient! Highly recommended. Najah Human Resources."
    },
    {
      "image":"./assets/images/National Plastic.jpg",
      "clientName":"National Plastic",
      "clientLocation":"Sharjah",
      "feedback":"What a great company offering great services. Very professional, knowledgeable and efficient! Highly recommended. Najah Human Resources."
    },
    {
      "image":"./assets/images/audex.gif",
      "clientName":"Audex Pte Ltd",
      "clientLocation":"Singapore",
      "feedback":"What a great company offering great services. Very professional, knowledgeable and efficient! Highly recommended. Najah Human Resources."
    }
   ]

  constructor(private _router:Router,private commonService:CommonService) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  ngOnInit() {
    this.getAllJobs();
    let fixmeTop = $('.client-says').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.client-says').css({                      // scroll to that element or below it
            position: 'sticky',
            top: '97px',
            left: '0'
        });
    } else {                                   //   apply position: static
        $('.client-says').css({                      // if you scroll above it
            position: 'static'
        });
    }

});
  }

  routeByUrl(url:string){
    this._router.navigateByUrl(url)
  }

  getAllJobs(){
    this.commonService.getAllJobs().subscribe(d=>{
      this.jobs=d.data;
      this.jobTitle=Object.keys(this.jobs)
    })
  }

  
}
