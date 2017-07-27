import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';
import { AppRoutingModule } from './app-routing-module';
import { ExpenseTableComponent } from './expenses/components/expense-table/expense-table.component';
import { ExpenseService } from './expenses/expense.service';
import { NavbarComponent } from './expenses/components/navbar/navbar.component';
import { StatisticsComponent } from './expenses/pages/statistics/statistics.component';
import { HistoryComponent } from './expenses/pages/history/history.component';
import { RegisterComponent } from './expenses/auth/register/register.component';
import { SignInComponent } from './expenses/auth/sign-in/sign-in.component';
import { CategoryService } from './expenses/category.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyExpensesComponent } from './expenses/container/daily-expenses/daily-expenses.component';
import { CategorySelectorComponent } from './expenses/components/category-selector/category-selector.component';
import { ExpenseNameComponent } from './expenses/components/expense-name/expense-name.component';
import { AddExpenseButtonComponent } from './expenses/components/add-expense-button/add-expense-button.component';
import { ExpenseFormComponent } from './expenses/form/expense-form/expense-form.component';
import { ExpenseAmountComponent } from './expenses/components/expense-amount/expense-amount.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DailyExpensesComponent,
    ExpenseFormComponent,
    ExpenseAmountComponent,
    CategorySelectorComponent,
    ExpenseNameComponent,
    AddExpenseButtonComponent,
    NavbarComponent,
    HistoryComponent,
    StatisticsComponent,
    SignInComponent,
    RegisterComponent,
    ExpenseTableComponent,
  ],
  providers: [ExpenseService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
