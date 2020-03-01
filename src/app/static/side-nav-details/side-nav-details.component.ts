import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;
@Component({
  selector: 'najah-side-nav-details',
  templateUrl: './side-nav-details.component.html',
  styleUrls: ['./side-nav-details.component.scss']
})
export class SideNavDetailsComponent implements OnInit {

  constructor() { }
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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit() {
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

}
