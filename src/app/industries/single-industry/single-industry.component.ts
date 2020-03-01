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

  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Industries', url:'/industries',isLast:false}
  ]

  industry:any;
  constructor(private commonService:CommonService,private route: ActivatedRoute,private _routrer:Router,private titleService:Title) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.getSingleIndustry(params.servicename) );
  }

  getSingleIndustry(industryName:string){
    this.commonService.getSingleIndustry(industryName).subscribe(data=>{
      if(data.filter(d=> d.url===industryName).length)
      {
      this.industry = data.filter(d=> d.url===industryName)[0]
     this.breadCrumb=[
        {name:'Home',url:'',isLast:false},
        {name:'Industries', url:'/industries',isLast:false}
      ]
      this.breadCrumb.push({name:this.industry.name,isLast:true,url:industryName})
      this.titleService.setTitle(this.industry.name)
      }
      else
      this._routrer.navigateByUrl("/industries");

      console.log(this.industry)
    })
  }

}
