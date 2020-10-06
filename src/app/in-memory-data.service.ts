import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): {} {
    const heroes = [
      {id: 1, name: 'Arthas'},
      {id: 2, name: 'Illidan Tempestira'},
      {id: 3, name: 'Bolvar Fordragon'},
      {id: 4, name: 'Cromi'},
      {id: 5, name: 'Millhouse "Jerimus" Manastorm'},
      {id: 6, name: 'Narxon'}
    ];
    return {heroes};
  }

}
