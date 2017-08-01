import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ExpenseFormComponent } from '../../expenses/form/expense-form/expense-form.component';
import { ExpenseAmountComponent } from './components/expense-amount/expense-amount.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { ExpenseNameComponent } from './components/expense-name/expense-name.component';
import { AddExpenseButtonComponent } from './components/add-expense-button/add-expense-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseDateComponent } from './components/expense-date/expense-date.component';

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExpenseFormComponent,
    ExpenseAmountComponent,
    CategorySelectorComponent,
    ExpenseNameComponent,
    AddExpenseButtonComponent,
    ExpenseDateComponent
  ],
  exports: [ ExpenseFormComponent ],
  providers: []
})
export class AddExpenseModule {
}
