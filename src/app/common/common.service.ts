import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  getDivision(url: any) :Observable<any>{
    return this.http.get(AppConstants.GET_DIVISION+url)
  }

  constructor(private http:HttpClient) { }

  getIndustries():Observable<any>{
    return this.http.get(AppConstants.GET_ALL_INDUSTRIES);
  }

  getHeaders():Observable<any>{
    return this.http.get(AppConstants.GET_HEADER_INDUSTRIES);
  }
  getSingleIndustry(industryName:string):Observable<any>{
    return this.http.get(AppConstants.GET_SINGLE_INDUSTRIES+industryName);
  }

  getAllJobs():Observable<any>{
    return this.http.get(AppConstants.GET_ALL_JOBS);
  }

  submitResume(data:any){
    return this.http.post(AppConstants.POST_RESUME,data);
  }

  submitJob(data:any){
    return this.http.post(AppConstants.POST_JOB,data);
  }
  addIndustry(data:any){
    return this.http.post(AppConstants.GET_ALL_INDUSTRIES,data);
  }
  submitDivision(data:any){
    return this.http.post(AppConstants.POST_DIVISION,data);
  }

}
