import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Hero } from "./hero";

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
              })
              .then(res => {
                return this.http.get(this.heroesUrl).toPromise()
                  .then(res => res.json().data as Hero[])
                  .catch(err2 => {
                    console.error('Error getting from mock api', err2);
                    return Promise.reject(err2.message || err2);
                  });
                }
              );   
  }
    

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
}