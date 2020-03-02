import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'najah-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.scss']
})
export class JobSeekerComponent implements OnInit {

  tomorrow:Date=new Date();
  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Job Seeker', url:'jobseeker',isLast:true}
  ]

  jobSeekerForm:FormGroup= new FormGroup({
    'name':new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(100)]),
    'email': new FormControl('',[Validators.required,Validators.email]),
    'subject': new FormControl('',[Validators.minLength(10),Validators.maxLength(100)]),
    'message': new FormControl('',[Validators.required,Validators.minLength(50),Validators.maxLength(250)]),
    'industry': new FormControl('',[Validators.required]),
    'dob': new FormControl('', [Validators.required])
  })
  specialization : any[]=[]
  constructor(private commonSerive:CommonService,private _routrer:Router,private  spinner: NgxSpinnerService,private toastr: ToastrService) {
   }

  ngOnInit() {
    this.getAllSpecialization();
  }
  getAllSpecialization(){
    this.commonSerive.getIndustries().subscribe(result=>{
      this.specialization= result;
    })

  }

  submitForm(){
    this.spinner.show();

    setTimeout(()=>{this.spinner.hide();this.toastr.success('We have got your resume. We will soon revert you back with some oppurtunity. Have a great day','Success' );},3000)
  }

}
