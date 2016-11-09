import { Injectable, EventEmitter, Output } from '@angular/core';
// import { remove } from 'lodash'; //pojedyńcza funkcja z biblioteki lodash

import * as _ from 'lodash'

export interface IBookmark {
  id: number | string;
  [key: string]: any; //dowolny typy. 
}

@Injectable()
export class BoomarksService {

  private items: IBookmark[] = [];

  @Output() changed: EventEmitter<IBookmark[]> = new EventEmitter<IBookmark[]>();

  constructor() {

  }

  add(item: IBookmark) {
    console.log("Dodanie do ulubionych" + item.id);
     
    this.items.push(item);
    this.changed.emit(this.get());
  } 

  remove(id: number | string) {
    console.log("Usunięcie z ulubionych" + id);
    _.remove(this.items, { id: id }); //albo zmiast {id: id} to {id}  //  this.items = this.items.filter(i=>i.id != id);
    this.changed.emit(this.get());  
  }

  get(): IBookmark[] {
    console.log("Pobranie ulubionych");
    return [...this.items]; // nowa tablica z elementami poprzedniej
  }

  has(id: number | string) : boolean
  {
    return this.items.some(item => item.id == id);
  }
}
