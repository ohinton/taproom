import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
  <h3>Add new keg:</h3>
  <input placeholder="keg name" class="input-lg" #newName>
  <input placeholder="keg brand" class="input-lg" #newBrand>
  <input placeholder="keg pint price" class="input-lg" #newPrice>
  <input placeholder="keg alcohol content" class="input-lg" #newAlcoholContent>
  <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent)">Add</button>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userKegName: HTMLInputElement, userKegBrand: HTMLInputElement, userKegPrice: HTMLInputElement, userKegAlcoholContent: HTMLInputElement){
    var newKeg: String[] = [userKegName.value, userKegBrand.value, userKegPrice.value, userKegAlcoholContent.value];
    this.onSubmitNewKeg.emit(newKeg);
    userKegName.value = "";
    userKegBrand.value = "";
    userKegPrice.value = "";
    userKegAlcoholContent.value = "";
  }
}
