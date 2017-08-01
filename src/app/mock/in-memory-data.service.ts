import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const expenses = [
      {date: '2017-08-01', name: 'Driving to work', amount: 122, category: 'fuel'},
      {date: '2017-08-01', name: 'Driving from work', amount: 122, category: 'fuel'},
      {date: '2017-08-01', name: 'Kaufland', amount: 67, category: 'food'}
    ];
    const categories = [
      'food',
      'fuel',
      'entertainment'
    ];
    return {expenses, categories};
  }

}
