import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
  test('Bypass authentication by embedding the credentials in the url', async ({ page }) => {
    // await page.goto('https://practice.cydeo.com/basic_auth'); <= This line will not work as we are not providing credentials in the URL. Instead, we are providing them in the URL itself.
    await page.goto('https://admin:admin@practice.cydeo.com/basic_auth');
    await page.waitForTimeout(1000);
  });

  test('Bypass authentication by encoding the credentials base64 format', async ({ page }) => {
    let encoding = Buffer.from('${process.env.PRACTICE_USERNAME}:${PRACTICE_PASSWORD}').toString('base64');
    await page.setExtraHTTPHeaders({ Authorization: `Basic ${encoding}` });
    await page.waitForTimeout(1000);
  });
});