import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from 'src/app/app-constants';
import { AccessTokenModel } from 'src/app/AccessTokenModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public authenticated = false;
  logoutSuccess:boolean = false;
  credentials: any = {
    username: '',
    password: ''
  }
  constructor(private http: HttpClient, private router: Router) { }

  authenticate(credentials, callback) { 
    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password),
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'} : {});

    this.http.get(AppConstants.LOGIN, {headers: headers}).subscribe(response => {
     this.authenticated=true;     
        this.saveToken(response);
        return callback && callback();
    },
    error => {
        if(error.status == 401){
            this.authenticated = false;
             return callback && callback();

        }
    }
);

}

saveToken(token){
  this.deleteCookies();
  let tokenData:AccessTokenModel=
  {
      authorities:token.authorities,
      userId:token.userId,
      username:token.username,
      areaModel : token.areaModel,
  }
  localStorage.setItem("access_token", JSON.stringify(tokenData))
  this.router.navigate(['/']);
}


checkLoggedIn() : boolean{
  if (!localStorage.getItem('access_token')){
      return false
  }else{
    return true
  }
}


logout() {
  this.http.post( 'logout',{}).subscribe(response =>{
     
      this.router.navigate(['/']);
      this.logoutSuccess = true;
      this.authenticated = false;
      this.deleteCookies();
      setTimeout(()=>{
          this.logoutSuccess = false;
      },2000)           
  }, error => {
    this.deleteCookies();
  })
}

deleteCookies(){
  localStorage.clear();
}
getUserDetails() {
  if (this.checkLoggedIn()) {
    return JSON.parse(localStorage.getItem('access_token'));
  } else {
    return {}
  }
}
}
