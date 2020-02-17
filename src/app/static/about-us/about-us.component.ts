import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'najah-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  specialization : string[] =["Specilization1"]
  constructor() { }

  ngOnInit() {
  }


  arrayOne(n: number): any[] {
    return Array(n);
  }

}
