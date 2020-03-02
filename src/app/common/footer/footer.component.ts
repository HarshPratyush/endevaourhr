import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'najah-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
    if(industry)
    this._routrer.navigate(["/industries",industry.url])
    else
    this._routrer.navigateByUrl("/industries")
  }

}
