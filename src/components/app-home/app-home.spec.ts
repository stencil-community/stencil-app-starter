import { TestWindow } from '@stencil/core/testing';
import { AppHome } from './app-home';

describe('app', () => {
  it('should build', () => {
    expect(new AppHome()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppHomeElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppHome],
        html: '<app-home></app-home>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
