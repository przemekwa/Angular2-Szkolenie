import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToHuman'
})
export class MsToHumanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === undefined || value === null || value === "")  {
      return "_"
    }

    const min = Math.floor(value/60000);
    const sek = Math.floor(value/1000) - min * 60;
    
    const minString = min ==0 ? "" : min+"min";
    const sekString = sek ==0 ? "" : sek+"sec";

    return minString+sekString
  }

}
