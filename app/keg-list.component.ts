import {Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';
import {KegComponent} from './keg.component';
import {EditKegDetailsComponent} from './edit-keg-details.component';
import {NewKegComponent} from './new-keg.component';
import {CheapnessPipe} from './cheapness.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs:['onKegSelect'],
  directives:[KegComponent, EditKegDetailsComponent, NewKegComponent],
  pipes: [CheapnessPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option selected="selected" value="all">Show All</option>
    <option value="cheap">Show cheap beers</option>
    <option value="expensive" selected="selected">Show expensive beers</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | cheapness:selectedCheapness" (click)="kegClicked(currentKeg)"
  [keg] = "currentKeg"
  [class.cheap]="currentKeg.price <= 5">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)">
  </new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public selectedCheapness: string = "all";
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void{
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: string[]): void {
    this.kegList.push(
      new Keg(newKeg[0], newKeg[1], parseFloat(newKeg[2]), parseFloat(newKeg[3]))
    );
  }
  onChange(optionFromMenu){
    this.selectedCheapness = optionFromMenu;
  }
}
