import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../expense.interface';

@Component({
  selector: 'expense-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expense-form.html'
})

export class ExpenseFormComponent {

  @Input()
  categories: Category[];

  @Output()
  add = new EventEmitter<FormGroup>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      date: ['', Validators.required],
      category: ['', Validators.required],
      name: ['', Validators.required],
      amount: [0, Validators.required]
    });
  }

  get control() {
    return this.form.get('category') as FormControl;
  }

  selectCategory(category: Category) {
    this.control.setValue(category);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }
}
