import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Hero } from "./hero";
import { HEROES } from "./mock.heroes";

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private eoghanHeroesUrl = 'http://localhost:3999/toDoLists/HeroArrayTest';
  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.eoghanHeroesUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(error => {
                console.error('An error occurred', error);
                return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(res => res.json().data as Hero[])
                        .catch(err2 => {
                          console.error('Error getting from mock api', err2);
                          return Promise.reject(err2.message || err2);
                        });
                //return Promise.reject(error.message || error);
              });   
  }
  
  

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}