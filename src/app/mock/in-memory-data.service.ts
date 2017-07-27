import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const expenses = [
      {name: 'Driving to work', amount: 122, category: 'fuel'},
      {name: 'Driving from work', amount: 122, category: 'fuel'},
      {name: 'Kaufland', amount: 67, category: 'food'},
      {category: 'fuel', name: 'Lorem ipsum', amount: 55},
      {category: 'fuel', name: 'Lorem ipsum', amount: 55},
      {category: 'fuel', name: 'Lorem ipsum', amount: 55},
      {category: 'fuel', name: 'Lorem ipsum', amount: 55}
    ];
    const categories = [
      'food',
      'fuel',
      'entertainment'
    ];
    return {expenses, categories};
  }

}
