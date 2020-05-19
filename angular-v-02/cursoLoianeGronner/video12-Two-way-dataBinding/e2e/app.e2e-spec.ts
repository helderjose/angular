import { ProjetoBasePage } from './app.po';

describe('projeto-base App', () => {
  let page: ProjetoBasePage;

  beforeEach(() => {
    page = new ProjetoBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
