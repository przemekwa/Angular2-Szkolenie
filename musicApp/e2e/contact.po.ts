import { browser, element, by } from 'protractor';

export class ContactPage {

    navigateTo() {
        return browser.get('/contact');
    }

    getLabelName() {
        return element(by.css('[for=name]'));
    }

    getInputName() {
        return element(by.id('name'));
    }

    getErrorMsg() {
        return element(by.css('#name + div > .is-danger'));
    }
}