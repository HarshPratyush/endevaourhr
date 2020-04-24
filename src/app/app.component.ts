import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $:any;  

@Component({
  selector: 'najah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public loader: LoadingBarService,private spinner: NgxSpinnerService){
    this.loader.progress$.subscribe(data=>{
      if(data>0)
      {
        this.spinner.show();
      }
      else
      {
        this.spinner.hide();
      }
    })
  }

  ngOnInit(){
    $("#myModal").modal('show');
  }

  
}
