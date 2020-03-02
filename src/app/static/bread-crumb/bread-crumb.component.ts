import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'najah-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  @Input()
  pageName:string='';
  @Input()
  breadCrumb:{name:string,url:string,isLast:boolean}[]=[];

  @Input()
  imageUrl:string='';
  constructor() { }

  ngOnInit() {
  }

}
