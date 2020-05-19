import { TesteTwoWayDataBindingPage } from './app.po';

describe('teste-two-way-data-binding App', () => {
  let page: TesteTwoWayDataBindingPage;

  beforeEach(() => {
    page = new TesteTwoWayDataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
