import { UdemyAppPage } from './app.po';

describe('udemy-app App', () => {
  let page: UdemyAppPage;

  beforeEach(() => {
    page = new UdemyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
