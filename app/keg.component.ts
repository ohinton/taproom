import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector:'keg-display',
    inputs: ['keg'],
    template:`
    <h1>{{ keg.name }}</h1>
    <h2>{{keg.brand}}</h2>
    <ul>
      <li> Price: $ {{keg.price}} </li>
      <li> Alcohol Content: {{keg.alcoholContent}} </li>
      <li> Remaining Pints: {{keg.pints}} </li>
    </ul>
    <button (click)="pourPint()" name="label">Pour A Pint</button>
    `
})
export class KegComponent{
  public keg: Keg;
  pourPint(){
    this.keg.pints --;
  }
}
