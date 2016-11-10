import { browser, element, by } from 'protractor';

export class MusicAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element.all(by.css(".nav-item")).first().getText();    
    // return element(by.css('app-root h1')).getText(); // jesli uzywany element to tylko jeden moze byc zwrocony
  }

//Protractor - testownie ui. Nakładka na Selnium

 get ParagraphText() { //tworzenie gettter- Tak jak wszędzie.
       return element(by.css('app-root h1')).getText();
 }

}
