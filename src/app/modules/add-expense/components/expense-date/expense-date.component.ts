import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'expense-date',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expense-date.html',
  styleUrls: ['./expense-date.scss']
})

export class ExpenseDateComponent {

  @Input()
  parent: FormGroup;

  @Input()
  date: NgbDateStruct;

  private today: NgbDateStruct;

  constructor(calendar: NgbCalendar) {
    this.today = calendar.getToday();
  }

  selectToday() {
    this.date = {
      year: this.today.year,
      month: this.today.month,
      day: this.today.day
    };
  }
}
