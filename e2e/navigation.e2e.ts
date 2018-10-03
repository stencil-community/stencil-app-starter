import { newE2EPage } from '@stencil/core/testing';

describe('navigation', () => {
  it('goes to the profile page', async () => {
    const page = await newE2EPage({ url: '/'});

    const button = await page.find('app-root >>> app-home >>> button');
    expect(button).toBeTruthy();
    await button.click();

    // TODO: fill this out some more
  });
});
