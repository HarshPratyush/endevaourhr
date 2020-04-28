import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from 'src/app/common/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/static/confirmation-dialog/confirmation-dialog.component';

export class ExpansionOverviewExample {
  panelOpenState = false;
}



@Component({
  selector: 'najah-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.scss']
},
)
export class ManageJobsComponent implements OnInit {
  allJobs: any[] = [];
  specialization: any[] = [];
  divisions: any[] = [];
  selectedSpecialization;
  selectedDivision;
  message: string = "Are you sure you want to disable this job?. Click ok to proceed.";

  breadCrumb: { name: string, url: string, isLast: boolean }[] = [
    { name: 'Home', url: '', isLast: false },
    { name: 'Manage Jobs', url: 'admin/jobs', isLast: true }
  ]

  getAllSpecialization() {
    this.commonService.getIndustries().subscribe(result => {
      this.specialization = result.data;
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

  fetchAllJobs() {
    this.commonService.findAllJobs().subscribe(response => {
      this.allJobs = response.data;
    });
  }

  archiveToggleForm: FormGroup = new FormGroup({
    'divisionName': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
    'industryId': new FormControl('', [Validators.required]),
  })

  archiveJob(job) {
    this.commonService.archiveJob(job.id).subscribe(response => {
      this.fetchAllJobs()
    });
  }

  openDialog(job): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: this.message }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.archiveJob(job)
      }
      else {
        this.allJobs[this.allJobs.findIndex(d => d.id == job.id)].archived = job.archived;
      }
    });
  }
  constructor(private commonService: CommonService, private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchAllJobs();
    this.getAllSpecialization();
  }

}
