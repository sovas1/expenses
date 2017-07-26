import { Expense } from '../expense/expense';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense/expense.service';

@Component({
  selector: 'expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})

export class ExpenseTableComponent implements OnInit {
  expenses: Expense[];

  constructor(private expenseService: ExpenseService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.getExpenses();
  }

  private getExpenses() {
    this.expenseService.getExpenses().then(response => this.expenses = response);
  }
}
