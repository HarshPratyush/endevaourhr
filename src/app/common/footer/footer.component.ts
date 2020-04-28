import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'najah-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  specialization : any[]=[]
  constructor(private _routrer:Router) { }

  ngOnInit() {
  }

  routeToIndustry(industry ? : any){
    if(industry)
    this._routrer.navigate(["/industries",industry.url])
    else
    this._routrer.navigateByUrl("/industries")
  }

}
