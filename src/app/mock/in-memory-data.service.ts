import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const expenses = [
      {id: 1, desc: 'Driving to work', amount: 122, category: 'fuel'},
      {id: 2, desc: 'Driving from work', amount: 122, category: 'fuel'},
      {id: 3, desc: 'Kaufland', amount: 67, category: 'grocery'}
    ];
    return {expenses};
  }

}
