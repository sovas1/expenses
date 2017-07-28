import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Expense } from './expense.interface';

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

  create(expense: Expense): Promise<Expense> {
    const url = `${this.expensesUrl}`;
    return this.http.post(url, JSON.stringify(expense))
                    .toPromise()
                    .then(response => response.json().data as Expense)
                    .catch(this.handleError);
  }

  remove(id: number): Promise<any> {
    const url = `${this.expensesUrl}/${id}`;
    return this.http.delete(url)
                    .toPromise()
                    .then(response => console.log('removed'))
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
