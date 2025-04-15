import { test, expect } from '@playwright/test';

test('Test 2: Verify user can view product details', async ({ page }) => {
await page.goto('https://practicesoftwaretesting.com');
await page.locator('[data-test="product-01JRX2W4W0BM3H4G3S4WS76E1R"]').click();

await expect(page).toHaveURL(/https:\/\/practicesoftwaretesting\.com\/product/);
await expect(page.locator('[data-test="product-name"]')).toHaveText('Combination Pliers');
await expect(page.locator('[data-test="unit-price"]')).toHaveText('14.15');
await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
await expect(page.locator('[data-test="add-to-favorites"]')).toBeVisible();
});