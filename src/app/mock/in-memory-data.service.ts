import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const expenses = [
      {id: 1, name: 'Driving to work', amount: 122, category: 'fuel'},
      {id: 2, name: 'Driving from work', amount: 122, category: 'fuel'},
      {id: 3, name: 'Kaufland', amount: 67, category: 'food'}
    ];
    const categories = [
      'food',
      'fuel',
      'entertainment'
    ];
    return {expenses, categories};
  }

}
