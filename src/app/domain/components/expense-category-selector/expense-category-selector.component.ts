import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'expense-category-selector',
  templateUrl: './expense-category-selector.component.html',
  styleUrls: ['./expense-category-selector.component.scss']
})

export class ExpenseCategorySelectorComponent implements OnInit {

  categories: string[];
  selectedCategory: string;

  constructor(private categoryService: CategoryService) {}

  public ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.categoryService.getCategories().then(response => this.categories = response);
  }

  onSelect(category: string): void {
    this.selectedCategory = category;
  }
}
