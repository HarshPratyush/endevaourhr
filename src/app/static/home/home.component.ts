import { Component, OnInit } from '@angular/core';
declare var $:any;
import { interval } from 'rxjs';
import { element } from 'protractor';

@Component({
  selector: 'najah-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  diletray:string[]=['customer','jobs','resume'];
  constructor() { 

  }

  ngOnInit() {

    const secondsCounter = interval(5000);
    let i =0;

    secondsCounter.subscribe(n =>{
      document.getElementById(this.diletray[i]).classList.remove('colored');
      if(i==this.diletray.length-1){
        i=0;
      }
      else{
        i=i+1;
      }
      let a = this.diletray[i];
      document.getElementById(a).classList.add('colored');
    });

    // let  a = 0;

    // $(window).scroll(function() {

    // let oTop = $('#counter').offset().top - window.innerHeight;
    // if (a == 0 && $(window).scrollTop() > oTop) {
    // $('.counter').each(function () {
    //   $(this).prop('Counter',0).animate({
    //   Counter: $(this).text()
    //   }, {
    //   duration: 5000,
    //   easing: 'swing',
    //   step: function (now) {
    //   $(this).text(Math.ceil(now));
    //   }
    //   });
    //   });
    // }});

    let a = 0;
$(window).scroll(function() {

  let oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

  }

}


