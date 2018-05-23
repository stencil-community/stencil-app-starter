import { render } from '@stencil/core/testing';
import { AppRoot } from './app-root';


describe('app-root', () => {

  it('should build', () => {
    expect(new AppRoot()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppRoot],
        html: '<app-root></app-root>'
      });
    });
  });
});
