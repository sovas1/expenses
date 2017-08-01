import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface Expense {
  date: NgbDateStruct;
  name: string;
  amount: number;
  category: Category;
}

export type Category = string;
