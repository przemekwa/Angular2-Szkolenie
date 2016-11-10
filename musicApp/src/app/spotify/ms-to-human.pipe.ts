import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToHuman'
})
export class MsToHumanPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
