import { TestWindow } from '@stencil/core/testing';
import { AppRoot } from './app-root';

describe('app-root', () => {
  it('should build', () => {
    expect(new AppRoot()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppRootElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppRoot],
        html: '<app-root></app-root>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
