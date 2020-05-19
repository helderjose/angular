import { A08TwoWayDataBinding03Page } from './app.po';

describe('a08-two-way-data-binding03 App', () => {
  let page: A08TwoWayDataBinding03Page;

  beforeEach(() => {
    page = new A08TwoWayDataBinding03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
