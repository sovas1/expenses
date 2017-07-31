import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ExpenseFormComponent } from '../expenses/form/expense-form/expense-form.component';
import { ExpenseAmountComponent } from '../expenses/components/expense-amount/expense-amount.component';
import { CategorySelectorComponent } from '../expenses/components/category-selector/category-selector.component';
import { ExpenseNameComponent } from '../expenses/components/expense-name/expense-name.component';
import { AddExpenseButtonComponent } from '../expenses/components/add-expense-button/add-expense-button.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    AddExpenseButtonComponent
  ],
  exports: [ ExpenseFormComponent ],
  providers: []
})
export class AddExpenseModule {
}
