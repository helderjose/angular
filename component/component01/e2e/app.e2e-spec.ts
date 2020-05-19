import { A01Component01Page } from './app.po';

describe('a01-component01 App', () => {
  let page: A01Component01Page;

  beforeEach(() => {
    page = new A01Component01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
