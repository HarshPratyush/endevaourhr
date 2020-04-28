import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
declare var $:any;

@Component({
  selector: 'najah-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Login Screen', url:'admin/login',isLast:true}
  ]

  invalidLogin = false
  credentials:{username:string,password:string}={username:'',password:''};

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {}

  login(){
    this.userService.authenticate(this.credentials, () => {
      if(this.userService.authenticated == true){
        this.router.navigateByUrl('admin/industry');
      }
      else{
        $(".error-message").fadeIn("slow");
        setTimeout(function(){
          $(".error-message").fadeOut("slow");
        }, 500000)
      }
    });
    return false;
  }

}
