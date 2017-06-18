import { GeneticSyndromeCatalogPage } from './app.po';

describe('genetic-syndrome-catalog App', () => {
  let page: GeneticSyndromeCatalogPage;

  beforeEach(() => {
    page = new GeneticSyndromeCatalogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
