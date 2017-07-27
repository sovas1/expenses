import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'expense-amount',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expense-amount.html',
  styleUrls: ['./expense-amount.scss']
})
export class ExpenseAmountComponent {

  @Input()
  parent: FormGroup;

  get invalid() {
    return (
      this.parent.get('amount').hasError('required') &&
      this.parent.get('amount').touched
    );
  }
}
