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

  page = 1;
  itemsPerPage = 5;
  previousPage =  1;

  @Input()
  expenses: Expense[] = [];

  expensesPaged: Expense[] = [];

  loadPage(page: number) {
    console.log('load page[', page, ']');
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  private loadData() {
    console.log('loading new page data - page[', this.page, '], size[', this.itemsPerPage, ']');
    let startIndex = (this.page - 1) * this.itemsPerPage;
    let endIndex = Math.min(startIndex + this.itemsPerPage - 1, this.totalItems - 1);
    this.expensesPaged = this.expenses.slice(startIndex, endIndex + 1);
    // todo
  }

  get totalItems() {
    return this.expenses ? this.expenses.length : 0;
  }
}
