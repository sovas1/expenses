import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable()
export class ExpenseDataService {
  expense: Expense;
  expenseChange() {
  }
}
