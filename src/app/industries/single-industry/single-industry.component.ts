import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'najah-single-industry',
  templateUrl: './single-industry.component.html',
  styleUrls: ['./single-industry.component.scss']
})
export class SingleIndustryComponent implements OnInit {

  breadCrumb:{name:string,url:string,isLast:boolean}[]=[]

  descriptionBreakdown:string[]=[];
  prev:any;
  next:any;

  industry:any;
  constructor(private commonService:CommonService,private route: ActivatedRoute,private _routrer:Router,private titleService:Title) { }

  ngOnInit() {
    this.route.params.subscribe( params => {this.getSingleIndustry(params.servicename) 
    this.getNextAndPrev(params.servicename);
  }
    );

  }

  getNextAndPrev(industryName:string){
    this.commonService.getIndustries().subscribe(d=>{
      let data = d as any[];
      let index = data.findIndex(d=>d.url===industryName);
      if(index<0)
      this._routrer.navigateByUrl("/industries");

      if(index ==0){
        this.prev = data[data.length-1];
        this.next = data[index+1]
      }
      else if(index == data.length-1){
        this.prev = data[index-1];
        this.next = data[0]
      }
      else{
        this.prev = data[index-1];
        this.next = data[index+1];
      }
    })

  }
  getSingleIndustry(industryName:string){
    this.commonService.getSingleIndustry(industryName).subscribe(data=>{
      if(data)
      {
      this.industry = data;
     this.breadCrumb=[
        {name:'Home',url:'',isLast:false},
        {name:'Industries', url:'/industries',isLast:false}
      ]
      this.breadCrumb.push({name:this.industry.name,isLast:true,url:industryName})
      this.titleService.setTitle(this.industry.name)
      this.makeDescriptionBreakdown();
      }
      else
      this._routrer.navigateByUrl("/industries");
    })
  }

  makeDescriptionBreakdown(){
      let dec = this.industry.description;
      let dscArr:string[]=dec.split(".");
      let str='';
      for(let i=0; i<dscArr.length ;i++){
        str+=dscArr[i]+'.';
        if(str.length>=500)
        {
            this.descriptionBreakdown.push(str);
            str='';
        }
      }
      this.descriptionBreakdown.push(str);


  }

  routeToIndustry(industry ? : any){
    if(industry)
    this._routrer.navigate(["/industries",industry.url])
    else
    this._routrer.navigateByUrl("/industries")
  }

}
