import { Component, Input } from '@angular/core';
import { Heroes } from '../model';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent {

  @Input() hero : Heroes
}
