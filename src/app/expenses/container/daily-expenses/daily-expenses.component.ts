import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ExpenseService } from '../../expense.service';
import { Expense } from '../../expense.interface';

@Component({
  selector: 'daily-expenses',
  templateUrl: './daily-expenses.html'
})

export class DailyExpensesComponent implements OnInit {

  categories$ = this.categoryService.getCategories();

  expenses: Expense[];

  constructor(private expenseService: ExpenseService,
              private categoryService: CategoryService) {
  }

  public ngOnInit(): void {
    this.getExpenses();
  }

  private getExpenses() {
    this.expenseService.getExpenses().then(response => this.expenses = response);
  }

  addExpense(event: any) {
    console.log('addExpense: ', event);
    this.expenseService.create(event).then(response => {
      this.expenses.splice(0, 0, response);
      console.log('after add: ', this.expenses);
    });
  }

  removeExpense(event: any) {
    console.log('removeExpense: ', event);
    let index: number = this.expenses.indexOf(event);
    this.expenseService.remove(event.id).then(response => {
      this.expenses.splice(index, 1);
      console.log('after remove: ', this.expenses);
    });
  }
}
