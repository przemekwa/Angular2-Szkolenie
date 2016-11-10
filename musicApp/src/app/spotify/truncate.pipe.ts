import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'

// Pipe to filtr przekształcający dane przekazanie do niego.
// Pipe wbudowane, te najczęściej wykorzystywane to .... | async i coś dla dat

@Pipe({  
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform { // wlasne pipe to tylko klasa implementujaca PipeTransform. 
  
  //metoda to tylko wartość i jakieś dowolne parametry.
  transform(value: any = "", length = 20): any {
    return _.truncate(value, { length });
  }
}
