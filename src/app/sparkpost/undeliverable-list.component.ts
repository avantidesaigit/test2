import { Component, NgModule, OnInit, Inject } from '@angular/core';
import { UnDeliverableListService } from './undeliverable-list.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'undeliverable-list',
  templateUrl: './undeliverable-list.html',
  providers:[DatePipe]

})
export class UndeliverableListComponent implements OnInit {

  constructor(private unDeliverableListService: UnDeliverableListService, private formBuilder: FormBuilder, private datePipe: DatePipe) {
   }
   public formGroup: FormGroup;

  count: number;
  public approvalDate: Date = new Date();
  public fromDate: Date = new Date(this.approvalDate.getFullYear(), this.approvalDate.getMonth(), 1);
  public toDate: Date = new Date(this.approvalDate.getFullYear(), this.approvalDate.getMonth() + 1, 0);
  public symbol = '';
  public reviewed = 'All';
  public approvalComment = '';
  public pageSize = 20;
  public type: 'numeric' | 'input' = 'numeric';
  public skip = 0;
  public spinLoader = false;

  ngOnInit() {}

  submitForm() {
    this.spinLoader = true;
    this.unDeliverableListService.getCount(this.datePipe.transform(this.fromDate, 'yyyy-MM-dd'), this.datePipe.transform(this.toDate, 'yyyy-MM-dd')).subscribe
      (
        list => {
          list.map((data) => {
                    data.meeting_date = new Date(data.meeting_date);
                    data.certifiedon = new Date(data.certifiedon);
                    if (data.date_reviewed) {
                        data.date_reviewed = new Date(data.date_reviewed); }
                  });
          this.skip = 0;
         // this.meetingGridData = list;
         // this.gridDataMeeting = { data: list.slice(this.skip, this.skip + this.pageSize), total: meetingResults.length };
          this.spinLoader = false;
          },
      );
    }

  // tslint:disable-next-line:member-ordering
  undeliverable = {
    recipient: 'george@travdyn.com'
  };
  // tslint:disable-next-line:member-ordering
  minDate = new Date(2019, 0, 1);
  // tslint:disable-next-line:member-ordering
  maxDate = new Date(2019, 6, 20);
}
