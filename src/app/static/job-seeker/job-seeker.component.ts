import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'najah-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.scss']
})
export class JobSeekerComponent implements OnInit {
  files=[];
  fileExt;
  tomorrow:Date=new Date();
  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Job Seeker', url:'jobseeker',isLast:true}
  ]

  jobSeekerForm:FormGroup= new FormGroup({
    'name':new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(100)]),
    'emailId': new FormControl('',[Validators.required,Validators.email]),
    'subject': new FormControl('',[Validators.minLength(10),Validators.maxLength(100)]),
    'message': new FormControl('',[Validators.required,Validators.minLength(50),Validators.maxLength(250)]),
    'industry': new FormControl('',[Validators.required]),
    'divisionId': new FormControl('',[Validators.required]),
    'dob': new FormControl('', [Validators.required]),
    'resume': new FormControl('',[Validators.required])
  })
  specialization : any[]=[]
  divisions : any[]=[]
  constructor(private commonSerive:CommonService,private _routrer:Router,private  spinner: NgxSpinnerService,private toastr: ToastrService) {
   }

  ngOnInit() {
    this.getAllSpecialization();
    this.jobSeekerForm.controls['industry'].valueChanges.subscribe(d=>{
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
    this.spinner.show();
    let data = this.jobSeekerForm.getRawValue();
    data.fileExt=this.fileExt;

    const momentDate = new Date(data.dob); // Replace event.value with your date value
    const formattedDate = moment(momentDate).format("YYYY-MM-DD");
    data.dob=formattedDate;

    this.commonSerive.submitResume(data).subscribe(d=>{
      this.toastr.success('We have got your resume. We will soon revert you back with some oppurtunity. Have a great day','Success' );
    })
  }

  uploadFile(event) {
    this.files=[]
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
      this.getBase64(element,'resume');
    }  
    this.getFileExt()
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  getFileExt(){
    this.fileExt = this.files[0].split('.').pop()
  }

  getBase64(file,controlName) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =  () =>{
      this.jobSeekerForm.controls[controlName].setValue(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
}
