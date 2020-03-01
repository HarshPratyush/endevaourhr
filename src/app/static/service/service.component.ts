import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'najah-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Services', url:'services',isLast:true}
  ]

  constructor() { }

  ngOnInit() {
  }

}
