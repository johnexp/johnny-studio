import { JohnnyStudioPage } from './app.po';

describe('johnny-studio App', function() {
  let page: JohnnyStudioPage;

  beforeEach(() => {
    page = new JohnnyStudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
