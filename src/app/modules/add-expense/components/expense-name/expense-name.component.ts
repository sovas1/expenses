import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'expense-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expense-name.html',
  styleUrls: ['./expense-name.scss']
})

export class ExpenseNameComponent {

  @Input()
  parent: FormGroup;

  get invalid() {
    return (
      this.parent.get('name').hasError('required') &&
      this.parent.get('name').touched
    );
  }
}
