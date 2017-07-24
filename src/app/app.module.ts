import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';
import { AppRoutingModule } from './app-routing-module';
import { ExpenseTableComponent } from './domain/expense-table/expense-table.component';
import { ExpenseService } from './domain/expense/expense.service';
import { ExpenseCategorySelectorComponent } from './domain/expense-category-selector/expense-category-selector.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ExpenseTableComponent,
    ExpenseCategorySelectorComponent
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
