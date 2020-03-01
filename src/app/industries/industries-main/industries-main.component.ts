import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'najah-industries-main',
  templateUrl: './industries-main.component.html',
  styleUrls: ['./industries-main.component.scss']
})
export class IndustriesMainComponent implements OnInit {

  specialization : any[]=[]
  constructor(private commonSerive:CommonService,private _routrer:Router) { }
  
  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Industries', url:'industries',isLast:true}
  ]

  ngOnInit() {
    console.log("landed in main ")
    this.getAllSpecialization();
  }
  getAllSpecialization(){
    this.commonSerive.getIndustries().subscribe(result=>{
      this.specialization= result;
    })

  }

  getSlicedString(value:string,index:number):string{
    return value.slice(0,index)+'...';
  }

  routeToIndustry(industry ? : any){
    if(industry)
    this._routrer.navigate(["/industries",industry.url])
    else
    this._routrer.navigateByUrl("/industries")
  }
}
