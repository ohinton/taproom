import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "cheapness",
  pure: false
})
export class CheapnessPipe implements PipeTransform {
  transform(input: Keg[], info){
    var desiredCheapness = info[0];
    var output: Keg[] =[];
    if(desiredCheapness === "cheap"){
      for (var i =0; i <input.length; i++){
        if (input[i].price <= 5) {
          output.push(input[i]);
      }
    }
    return output;
  } else if (desiredCheapness === "expensive"){
      for (var i =0; i <input.length; i++){
        if (input[i].price > 5) {
        output.push(input[i]);
    }
  }
  return output;
  } else {
    return input;
    }
  }
}
