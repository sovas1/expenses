import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'add-expense-button',
  templateUrl: './add-expense-button.html',
  styleUrls: ['./add-expense-button.scss']
})

export class AddExpenseButtonComponent {

  @Input()
  parent: FormGroup;

  @Output()
  add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }
}
