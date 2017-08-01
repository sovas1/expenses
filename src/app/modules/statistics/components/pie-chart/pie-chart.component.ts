import { Component, DoCheck, Input, IterableDiffer, IterableDiffers } from '@angular/core';
import { Expense } from '../../../../expenses/expense.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/groupBy';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.html',
  styleUrls: ['./pie-chart.scss']
})

export class PieChartComponent implements DoCheck {

  @Input()
  expenses: Expense[];

  private diff: IterableDiffer<any>;

// Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';

  constructor(private differs: IterableDiffers) {
    this.diff = differs.find([]).create(null);
  }

  ngDoCheck(): void {
    let changes = this.diff.diff(this.expenses);
    if (changes) {
      this.loadData();
    }
  }

  private loadData() {
    Observable.from(this.expenses)
      .groupBy(expense => expense.category)
      .forEach(group => {
        this.pieChartLabels.push(group.key);
        let sum = 0;
        group.subscribe(sub => {
          sum += sub.amount;
        }).add(() => this.pieChartData.push(sum));
      });
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
