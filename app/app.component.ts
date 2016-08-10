import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model'
import {KegListComponent} from './keg-list.component'

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
    <div class="container">
      <h1>List of Kegs</h1>
      <keg-list [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
    new Keg("Miller Highlife", "Miller Brewing Co.", 5, 5.5),
    new Keg("Bud Light", "Anheuser-Busch", 2, 5.75),
    new Keg("PBR", "Pabst", 3, 5.25)
  ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
