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
    return this.http.post(AppConstants.POST_INDUSTRY,data);
  }
  submitDivision(data:any){
    return this.http.post(AppConstants.POST_DIVISION,data);
  }

  findAllJobs():Observable<any>{
    return this.http.get(AppConstants.FIND_ALL_JOBS)
  }

  archiveJob(data:any):Observable<any>{
    return this.http.put(AppConstants.ARCHIVE_JOB +data,null)
  }

  findAllJobSeekers():Observable<any>{
    return this.http.get(AppConstants.GET_ALL_JOB_SEEKERS)
  }

  getFile(data:any):Observable<any>{
    return this.http.get(AppConstants.GET_FILE+data)
  }

}
