import { Component, EventEmitter, Output } from '@angular/core';

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
