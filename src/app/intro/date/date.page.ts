import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasService } from 'src/app/services/data.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {
  dateForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DatasService
  ) { }
  ngOnInit() {
    this.dateForm = this.formBuilder.group({
      date: ['']
    });
  }
  clearDateForm(): void {
    this.dateForm.reset();
  }
  submitDate() {
    this.dataService.postDate(this.dateForm).subscribe(
      (serverResponse) => {
        console.log(serverResponse);
      },
      (error) => alert(error),
    );
  }
  goAddWaiters() {
    this.router.navigateByUrl('waiters');
  }
}
