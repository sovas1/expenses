import { Component } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'daily-expenses',
  templateUrl: './daily-expenses.html'
})

export class DailyExpensesComponent {

  categories$ = this.categoryService.getCategories();

  constructor(private categoryService: CategoryService) {
  }

  addExpense(event: any) {
    console.log('addExpense');
  }
}
