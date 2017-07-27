import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { ExpenseService } from '../../expense.service';
import { Expense } from '../../expense.interface';

@Component({
  selector: 'expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})

export class ExpenseTableComponent {

  @Input()
  expenses: Expense[];

  constructor(private expenseService: ExpenseService,
              private router: Router) {
  }
}
