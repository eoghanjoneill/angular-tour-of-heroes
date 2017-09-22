import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Hercules'},
  { id: 12, name: 'Aeneas'},
  { id: 13, name: 'Romulus'},
  { id: 14, name: 'Remus'},
  { id: 15, name: 'Publius Scipio Africanus the Elder'},
  { id: 16, name: 'Nero'},
  { id: 17, name: 'Venus'},
  { id: 18, name: 'Mars'},
  { id: 19, name: 'Julius Caesar'},
  { id: 20, name: 'Fionn MacChumhaill'},
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };  
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
