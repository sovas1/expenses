import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  imports: [
    ChartsModule,
    BrowserModule,
    NgbModule
  ],
  declarations: [
    StatisticsComponent,
    PieChartComponent
  ],
  exports: [StatisticsComponent],
  providers: []
})
export class StatisticsModule {
}
