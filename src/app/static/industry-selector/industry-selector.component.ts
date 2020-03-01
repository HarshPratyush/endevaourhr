import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'najah-industry-selector',
  templateUrl: './industry-selector.component.html',
  styleUrls: ['./industry-selector.component.scss']
})
export class IndustrySelectorComponent implements OnInit {

  specialization : any[]=[]
  constructor(private commonSerive:CommonService,private _routrer:Router) { }

  ngOnInit() {
    this.getAllSpecialization();
  }
  getAllSpecialization(){
    this.commonSerive.getIndustries().subscribe(result=>{
      this.specialization= result;
    })

  }

  routeToIndustry(industry ? : any){
    this._routrer.navigate(['industries']);
    if(industry)
    this._routrer.navigate(["/industries",industry.url])
    else
    this._routrer.navigateByUrl("/industries")
  }
}
