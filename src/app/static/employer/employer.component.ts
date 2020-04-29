import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/common/common.service';
import { Router } from '@angular/router';
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
    'emailId': new FormControl('',[Validators.required,Validators.email]),
    'subject': new FormControl('',[Validators.minLength(10),Validators.maxLength(100)]),
    'requirement': new FormControl('',[Validators.required,Validators.minLength(50),Validators.maxLength(250)]),
    'industry': new FormControl('',[Validators.required]),
    'divisionId': new FormControl('',[Validators.required]),
    'location': new FormControl('',[Validators.required]),
    'openings': new FormControl('',[Validators.required,Validators.min(1)]),
    'companyName': new FormControl('', [Validators.required,Validators.required,Validators.minLength(4),Validators.maxLength(100)]),
  })

  specialization : any[]=[]
  divisions : any[]=[]
  constructor(private commonSerive:CommonService,private _routrer:Router,private toastr: ToastrService) {
   }

   ngOnInit() {
    this.getAllSpecialization();
    this.employerForm.controls['industry'].valueChanges.subscribe(d=>{
      this.getDivsion(d);
    })
  }
  getAllSpecialization(){
    this.commonSerive.getIndustries().subscribe(result=>{
      this.specialization= result.data;
    })

  }

  getDivsion(data){

    this.commonSerive.getDivision(data.url).subscribe(d=>{
      this.divisions=d.data;
    });
  }

  submitForm(){
    let data = this.employerForm.getRawValue();
    this.employerForm.disable();
    this.commonSerive.submitJob(data).subscribe(d=>{
    this.employerForm.enable();
      this.toastr.success('We got your requirement. Have a good day.','Success' );
    },error=>{
    this.employerForm.enable();
    })
  }

}
