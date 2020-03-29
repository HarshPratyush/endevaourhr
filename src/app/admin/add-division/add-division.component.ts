import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'najah-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.scss']
})
export class AddDivisionComponent implements OnInit {

  files=[];
  fileExt;
  tomorrow:Date=new Date();
  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Add Division', url:'admin/division',isLast:true}
  ]

  divisionForm:FormGroup= new FormGroup({
    'divisionName':new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(100)]),
    'industryId': new FormControl('',[Validators.required]),
  })
  specialization : any[]=[]
  divisions : any[]=[]
  constructor(private commonSerive:CommonService,private _routrer:Router,private toastr: ToastrService) {
   }

  ngOnInit() {
    this.getAllSpecialization();
   
  }
  getAllSpecialization(){
    this.commonSerive.getIndustries().subscribe(result=>{
      this.specialization= result.data;
    })

  }

  submitForm(){
    let data = this.divisionForm.getRawValue();

    this.commonSerive.submitDivision(data).subscribe(d=>{
      this.toastr.success('Division Added Successfully','Success' );
    })
  }

}
