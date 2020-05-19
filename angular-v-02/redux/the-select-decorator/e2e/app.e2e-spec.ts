import { InstallingReduxPage } from './app.po';

describe('installing-redux App', function() {
  let page: InstallingReduxPage;

  beforeEach(() => {
    page = new InstallingReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
