import { Component, DoCheck, EventEmitter, Input, IterableDiffer, IterableDiffers, Output } from '@angular/core';
import { Expense } from '../../expense.interface';

@Component({
  selector: 'expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})

export class ExpenseTableComponent implements DoCheck {

  @Output()
  remove = new EventEmitter<any>();

  @Input()
  expenses: Expense[];

  expensesPaged: Expense[] = [];

  page = 1;
  previousPage = 0;
  itemsPerPage = 5;
  totalItems = 0;

  private diff: IterableDiffer<any>;

  constructor(private differs: IterableDiffers) {
    this.diff = differs.find([]).create(null);
  }

  public ngDoCheck(): void {
    let changes = this.diff.diff(this.expenses);
    if (changes) {
      this.loadData();
    }
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  private loadData() {
    if (!this.expenses) {
      return;
    }
    this.totalItems = this.expenses.length;
    let startIndex = (this.page - 1) * this.itemsPerPage;
    let endIndex = Math.min(startIndex + this.itemsPerPage - 1, this.totalItems - 1);
    this.expensesPaged = this.expenses.slice(startIndex, endIndex + 1);
  }

  removeRow(row: Expense) {
    this.remove.emit(row);
  }
}
