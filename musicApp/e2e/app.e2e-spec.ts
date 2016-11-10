import { ContactPage } from './contact.po';
import { MusicAppPage } from './app.po';

describe('music-app App', function() {
  let page: MusicAppPage;
  let contact: ContactPage;

  beforeEach(() => {
    page = new MusicAppPage();
    contact = new ContactPage();
  });

  it('Testowanie czy aplikacja Todo działa ', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo');
  });

  it('Testowanie strony contact - pobieranie nazwy Input-a', () => {
    contact.navigateTo();
    expect(contact.getInputName().getText()).toEqual('Name:');
  });

  it(' Testowanie  strony contact - pobieranie nazwy Label-a', () => {
    contact.navigateTo();
    expect(contact.getLabelName().getText()).toEqual('Name:');
  });

  it(' Testowanie strony contact - jeśli 2 znaki w formularzu', () => {
    contact.navigateTo();
    contact.getInputName().sendKeys('ff');
    expect(contact.getErrorMsg().isDisplayed()).toBe(true);
  });
});
