import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'najah-add-industry',
  templateUrl: './add-industry.component.html',
  styleUrls: ['./add-industry.component.scss']
})
export class AddIndustryComponent implements OnInit {

  files=[];
  fileExt;
  fileType;
  tomorrow:Date=new Date();
  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'Add Industry', url:'admin/industry',isLast:true}
  ]

  addIndustry:FormGroup= new FormGroup({
    'name':new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(100)]),
    'url':new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required,Validators.minLength(100),Validators.maxLength(5000)]),
    'image': new FormControl('',[Validators.required])
  })
  specialization : any[]=[]
  divisions : any[]=[]
  constructor(private commonSerive:CommonService,private _routrer:Router,private toastr: ToastrService) {
   }

  ngOnInit() {
   
  }
 

  submitForm(){
    let data = this.addIndustry.getRawValue();
    data.fileExt=this.fileExt;
    data.fileType=this.fileType

    this.commonSerive.addIndustry(data).subscribe(d=>{
      this.toastr.success('Industry Added Successfuly','Success' );
    })
  }

  uploadFile(event) {
    this.files=[]
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
      this.fileType = element.type;
      this.getBase64(element,'image');
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
      this.addIndustry.controls[controlName].setValue(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

}
