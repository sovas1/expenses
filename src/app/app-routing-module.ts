import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './expenses/pages/history/history.component';
import { StatisticsComponent } from './expenses/pages/statistics/statistics.component';
import { RegisterComponent } from './expenses/auth/register/register.component';
import { SignInComponent } from './expenses/auth/sign-in/sign-in.component';
import { DailyExpensesComponent } from './expenses/container/daily-expenses/daily-expenses.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DailyExpensesComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
