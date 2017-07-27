import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryService } from '../../category.service';
import { FormGroup } from '@angular/forms';
import { Category } from '../../expense.interface';

@Component({
  selector: 'category-selector',
  templateUrl: './category-selector.html',
  styleUrls: ['./category-selector.scss']
})

export class CategorySelectorComponent {

  touched = false;

  @Input()
  parent: FormGroup;

  @Input()
  selected: string;

  @Input()
  categories: Category[];

  @Output()
  select = new EventEmitter<Category>();

  get invalid() {
    return (
      this.parent.hasError('noCategories') &&
      this.touched
    );
  }

  exists(category: Category) {
    return !!~this.selected.indexOf(category);
  }

  isActive(category: Category) {
    return this.exists(category);
  }

  onSelect(category: Category) {
    this.touched = true;
    this.select.emit(category);
  }

}