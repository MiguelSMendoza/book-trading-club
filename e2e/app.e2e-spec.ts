import { BookTradingClubPage } from './app.po';

describe('book-trading-club App', () => {
  let page: BookTradingClubPage;

  beforeEach(() => {
    page = new BookTradingClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
