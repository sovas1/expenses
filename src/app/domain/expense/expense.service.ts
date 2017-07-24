import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Expense } from './expense';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExpenseService {
  private expensesUrl = 'api/expenses';

  constructor(private http: Http) {
  }

  getExpenses(): Promise<Expense[]> {
    const url = `${this.expensesUrl}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Expense[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
