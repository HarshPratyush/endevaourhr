import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'endeavour-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'endeavourhr';

  constructor(){
    $(window).scroll(function () {
  
      if ($(window).scrollTop() > 110 && $(window).width() < 2000) {
        $('#header').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 110 && $(window).width() < 2000) {
        $('#header').removeClass('navbar-fixed');
      }
    });
  }
  
}
