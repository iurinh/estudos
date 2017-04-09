import { ClientEs6LoginPage } from './app.po';

describe('client-es6-login App', () => {
  let page: ClientEs6LoginPage;

  beforeEach(() => {
    page = new ClientEs6LoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
