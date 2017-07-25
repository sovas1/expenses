import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';
import { AppRoutingModule } from './app-routing-module';
import { ExpenseTableComponent } from './domain/components/expense-table/expense-table.component';
import { ExpenseService } from './domain/components/expense/expense.service';
import { ExpenseCategorySelectorComponent } from './domain/components/expense-category-selector/expense-category-selector.component';
import { NavbarComponent } from './domain/components/navbar/navbar.component';
import { HomeComponent } from './domain/pages/home/home.component';
import { StatisticsComponent } from './domain/pages/statistics/statistics.component';
import { HistoryComponent } from './domain/pages/history/history.component';
import { RegisterComponent } from './domain/auth/register/register.component';
import { SignInComponent } from './domain/auth/sign-in/sign-in.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HistoryComponent,
    StatisticsComponent,
    SignInComponent,
    RegisterComponent,
    ExpenseTableComponent,
    ExpenseCategorySelectorComponent
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
