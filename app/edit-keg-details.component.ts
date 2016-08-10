import { Component } from 'angular2/core'
import { Keg } from './keg.model'

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>Edit name:</h3>
    <input [(ngModel)]="keg.name" class="input-lg keg-form"/>
    <h3>Edit brand:</h3>
    <input [(ngModel)]="keg.brand" class="input-lg keg-form"/>
    <h3>Edit price:</h3>
    <input [(ngModel)]="keg.price" class="input-lg keg-form"/>
    <h3>Edit alcohol content:</h3>
    <input [(ngModel)]="keg.alcoholContent" class="input-lg keg-form"/>
  </div>
  `
})

export class EditKegDetailsComponent{
  public keg: Keg;
}
