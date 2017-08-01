import { NgModule } from '@angular/core';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';
import { RemoveExpenseButtonComponent } from './components/remove-expense-button/remove-expense-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    NgbModule,
    BrowserModule
  ],
  declarations: [
    RemoveExpenseButtonComponent,
    ExpenseTableComponent
  ],
  exports: [ ExpenseTableComponent ],
  providers: []
})
export class ExpensesTableModule {
}
