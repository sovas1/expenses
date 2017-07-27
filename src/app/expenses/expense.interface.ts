export interface Expense {
  name: string;
  amount: number;
  category: Category;
}

export type Category = string;
