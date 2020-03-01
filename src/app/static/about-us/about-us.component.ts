import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'najah-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'About Us', url:'about-us',isLast:true}
  ]

  ngOnInit(){
    
  }

}
