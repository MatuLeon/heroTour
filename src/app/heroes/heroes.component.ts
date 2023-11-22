import { Component } from '@angular/core';
import { Heroes } from './model';
import { HEROES } from './mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes = HEROES;

  selectedHero: Heroes;


  onSelect(hero: Heroes): void {
  this.selectedHero = hero;
}

}
