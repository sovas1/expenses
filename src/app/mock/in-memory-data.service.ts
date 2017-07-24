import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const expenses = [
      {id: 0, name: 'Driving to work', amount: 122, category: 'fuel'},
      {id: 11, name: 'Driving from work', amount: 122, category: 'fuel'},
      {id: 12, name: 'Kaufland', amount: 67, category: 'grocery'}
    ];
    return {expenses};
  }

}
