import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ExpenseService } from '../../expense.service';

@Component({
  selector: 'remove-expense-button',
  templateUrl: './remove-expense-button.html',
  styleUrls: ['./remove-expense-button.scss']
})

export class RemoveExpenseButtonComponent {

  @Output()
  remove = new EventEmitter<any>();

  onClick() {
    this.remove.emit();
  }

}
