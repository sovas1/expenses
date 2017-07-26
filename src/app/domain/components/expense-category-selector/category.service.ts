import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
  private categoriesUrl = 'api/categories';

  constructor(private http: Http) {
  }

  getCategories(): Promise<string[]> {
    const url = `${this.categoriesUrl}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as string[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
