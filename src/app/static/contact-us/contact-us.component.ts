import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'najah-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Contact Us', url:'contact-us',isLast:true}
  ]

  constructor() { }

  ngOnInit() {
  }

}
