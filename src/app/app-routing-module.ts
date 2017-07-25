import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './domain/home/home.component';
import { HistoryComponent } from './domain/history/history.component';
import { StatisticsComponent } from './domain/statistics/statistics.component';
import { RegisterComponent } from './domain/register/register.component';
import { SignInComponent } from './domain/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
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
