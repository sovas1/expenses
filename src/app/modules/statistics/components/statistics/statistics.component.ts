import { Component } from '@angular/core';
import { ExpenseService } from '../../../../expenses/expense.service';
import { CategoryService } from '../../../../expenses/category.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.html',
  styleUrls: ['./statistics.scss']
})

export class StatisticsComponent {

  expenses$ = this.expenseService.getExpenses();

  constructor(private expenseService: ExpenseService,
              private categoryService: CategoryService) {
  }
}
