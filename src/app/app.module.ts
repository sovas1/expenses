import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';
import { AppRoutingModule } from './app-routing-module';
import { ExpenseService } from './expenses/expense.service';
import { NavbarComponent } from './expenses/components/navbar/navbar.component';
import { HistoryComponent } from './expenses/pages/history/history.component';
import { RegisterComponent } from './expenses/auth/register/register.component';
import { SignInComponent } from './expenses/auth/sign-in/sign-in.component';
import { CategoryService } from './expenses/category.service';
import { DailyExpensesComponent } from './expenses/container/daily-expenses/daily-expenses.component';
import { ExpensesTableModule } from './modules/expenses-table/expenses-table.module';
import { AddExpenseModule } from './modules/add-expense/add-expense.module';
import { StatisticsModule } from './modules/statistics/statistics.module';

@NgModule({
  imports: [
    ExpensesTableModule, AddExpenseModule, StatisticsModule,
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DailyExpensesComponent,
    NavbarComponent,
    HistoryComponent,
    SignInComponent,
    RegisterComponent,
  ],
  providers: [ExpenseService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
