import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getIndustries():Observable<any>{
    return this.http.get(AppConstants.GET_ALL_INDUSTRIES);
  }

  getHeaders():Observable<any>{
    return this.http.get(AppConstants.GET_HEADER_INDUSTRIES);
  }
  getSingleIndustry(industryName:string):Observable<any>{
    return this.http.get(AppConstants.GET_SINGLE_INDUSTRIES);
  }

  getAllJobs(){
    return this.http.get(AppConstants.GET_ALL_JOBS);
  }
}
