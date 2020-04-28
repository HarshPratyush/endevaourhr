import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { AppConstants } from 'src/app/app-constants';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/static/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'najah-job-seekers',
  templateUrl: './job-seekers.component.html',
  styleUrls: ['./job-seekers.component.scss']
})
export class JobSeekersComponent implements OnInit {
  [x: string]: any;
  filePath: SafeResourceUrl;
  allJobSeekers: any[] = [];
  specialization: any[]=[];
  divisions:any[]=[];
  selectedSpecialization;
  selectedDivision;
  file:any[] = [];
  message: string = "Please click to preview attachment";
  breadCrumb:{name:string,url:string,isLast:boolean}[]=[
    {name:'Home',url:'',isLast:false},
    {name:'All Job-Seekers', url:'admin/jobSeekers',isLast:true}
  ]

  constructor(private commonService: CommonService,private sanitizer:DomSanitizer, private dialog: MatDialog) {}

  ngOnInit() {
    this.getAllSpecialization();
    this.findAllJobSeekers();
  }

  getAllSpecialization(){
    this.commonService.getIndustries().subscribe(result=>{
      this.specialization= result.data;
    })

  }

  getDivision(data) {
    if (data) {
      this.selectedDivision=null;
      this.commonService.getDivision(data.url).subscribe(d => {
        this.divisions = d.data;
      });
    }
  }

  findAllJobSeekers(){
    this.commonService.findAllJobSeekers().subscribe(response => {
      this.allJobSeekers = response.data;
    });
  }

  getFile(jobSeeker){
    if (jobSeeker) {
      this.commonService.getFile(jobSeeker.resumeId).subscribe(response => { 
        this.file = response.data;
      });
    }
   
  }

  getPath(jobSeeker){
    return this.sanitizer.bypassSecurityTrustResourceUrl(AppConstants.API_HOME_URL+'anonymous/downloadAttachment/'+jobSeeker.resumeId);
     }

     openDialog(jobSeeker): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '250px',
        data: { message: this.message }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.filePath = this.getPath(jobSeeker);
        }
      });
    }



}
