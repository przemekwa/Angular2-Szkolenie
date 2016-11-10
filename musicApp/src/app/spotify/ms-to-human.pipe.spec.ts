/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MsToHumanPipe } from './ms-to-human.pipe';

describe('Pipe: MsToHuman', () => {
  let pipe;
  beforeEach(() => { //mozna podać paremtr done, ktorey umożliwania czekanie za kończoenie jakiś asynichronicznych wywowłań
    pipe = new MsToHumanPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  // it('czySaMilisekundy', ()=> {
  //   expect([1]).toBe([1]); // bedzie false, bo tobe sprawdza referencje a nie wartosc
  // });

  it('Test[38002-38sec]', () => {
    let result = pipe.transform(38002);
    expect(result).toBe("38sec");
  });

  it('Test[142389 - 2min22sek]', () => {
    let result = pipe.transform(142389);
    expect(result).toBe("2min22sec");
  });

  it('Test[undefinie => _]', () => {
    let result = pipe.transform(undefined);
    expect(result).toBe("_");
  });

  it('Test[38002 jak string-38sec]', () => {
    let result = pipe.transform('38002');
    expect(result).toBe("38sec");
  });

});
