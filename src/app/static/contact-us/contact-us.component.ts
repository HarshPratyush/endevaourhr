import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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

  lng;
  lat
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = pos.coords.longitude;
        this.lat = pos.coords.latitude;
      });
    }
  }

  redirectToMap(){
    if(this.lat && this.lng)
    {
    window.open(
      "https://www.google.com/maps/dir/?api=1&origin="+this.lat+","+this.lng+"&destination="+
      "25.253508, 55.302025"+"&travelmode=driving target='_blank'");
    }else{
      this.toastr.warning("Please give the geo-location access for using this feature")
    }
  }

}
