import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from '../../expense.interface';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'dateFilter',
  pure: false
})
export class DateFilterPipe implements PipeTransform {
  transform(items: NgbDateStruct[], filter: Expense): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item === filter.date);
  }
}
