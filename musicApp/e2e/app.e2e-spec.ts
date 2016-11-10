import { ContactPage } from './contact.po';
import { MusicAppPage } from './app.po';

describe('music-app App', function() {
  let page: MusicAppPage;
  let contact: ContactPage;

  beforeEach(() => {
    page = new MusicAppPage();
    contact = new ContactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo');
  });

  it('Testowanie getInputName srony contact', () => {
    contact.navigateTo();
    expect(contact.getInputName().getText()).toEqual('Name:');
  });

  it('Testowanie getLabelName srony contact', () => {
    contact.navigateTo();
    expect(contact.getLabelName().getText()).toEqual('Name:');
  });

  it('Testowanie jeśli 2 znaki w formularzu', () => {
    contact.navigateTo();
    contact.getInputName().sendKeys('ff');
    expect(contact.getErrorMsg().isDisplayed()).toBe(true);
  });


});
