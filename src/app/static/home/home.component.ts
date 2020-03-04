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


  divArray:string[]=['customer','jobs','resume'];
  constructor() { 

  }

  ngOnInit() {

    const secondsCounter = interval(5000);
    let i =0;

    secondsCounter.subscribe(n =>{
      document.getElementById(this.divArray[i]).classList.remove('colored');
      if(i==this.divArray.length-1){
        i=0;
      }
      else{
        i=i+1;
      }
      let a = this.divArray[i];
      document.getElementById(a).classList.add('colored');
    });


    $('.counter').each(function () {
      $(this).prop('Counter',0).animate({
      Counter: $(this).text()
      }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
      $(this).text(Math.ceil(now));
      }
      });
      });

      $('.swing-counter').on('inview', function (event, visible) {
        if (visible == true) {
          alert("reached")
        } else {
          // element has gone out of viewport
        }
      });
  }

}


