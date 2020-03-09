import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common/common.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'najah-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {

  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Employer', url:'employer',isLast:true}
  ]

  employerForm:FormGroup= new FormGroup({
    'name':new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(100)]),
    'email': new FormControl('',[Validators.required,Validators.email]),
    'subject': new FormControl('',[Validators.minLength(10),Validators.maxLength(100)]),
    'message': new FormControl('',[Validators.required,Validators.minLength(50),Validators.maxLength(250)]),
    'industry': new FormControl('',[Validators.required]),
    'divison': new FormControl('',[Validators.required]),
    'numberOfRequirment': new FormControl('',[Validators.required,Validators.min(1)]),
    'companyname': new FormControl('', [Validators.required,Validators.required,Validators.minLength(4),Validators.maxLength(100)]),
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

    setTimeout(()=>{this.spinner.hide();this.toastr.success('We got your requirment. We will start looking for some awesome team mate','Success' );},3000)
  }

}
