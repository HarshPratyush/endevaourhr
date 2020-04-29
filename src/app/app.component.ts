import { Component, OnInit } from '@angular/core';
import { CommonService } from './common/common.service';
declare var $:any;  

@Component({
  selector: 'najah-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  industries=[];
  constructor(private commonService:CommonService){
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
