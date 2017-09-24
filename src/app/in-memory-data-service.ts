import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zero'},
      { id: 11, name: 'Hercules'},
      { id: 12, name: 'Aeneas'},
      { id: 13, name: 'Romulus'},
      { id: 14, name: 'Remus'},
      { id: 15, name: 'Publius Scipio Africanus the Elder'},
      { id: 16, name: 'Nero'},
      { id: 17, name: 'Venus'},
      { id: 18, name: 'Mars'},
      { id: 19, name: 'Julius Caesar'},
      { id: 20, name: 'Fionn MacChumhaill'}
    ];
    return {heroes};
  }
}