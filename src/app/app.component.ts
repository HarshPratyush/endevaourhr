import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from './common/common.service';
declare var $:any;  

@Component({
  selector: 'najah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  industries=[];
  constructor(public loader: LoadingBarService,private spinner: NgxSpinnerService,private commonService:CommonService){
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
    this.getAllIndustries();
    $("#myModal").modal('show');
  }
  getAllIndustries(){
    this.commonService.getIndustries().subscribe(d=>{
      this.industries = d.data;
    })
  }

  
}
