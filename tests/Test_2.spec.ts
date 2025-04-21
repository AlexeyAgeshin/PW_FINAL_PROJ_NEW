import { test, expect } from '@playwright/test';

test('Test 2: Verify user can view product details', async ({ page }) => {
await page.goto('https://practicesoftwaretesting.com');
await page.getByTestId('product-01JSC6YV2J9T7E530VXKCTT04Q').click();

await expect(page).toHaveURL(/https:\/\/practicesoftwaretesting\.com\/product/);
await expect(page.getByTestId('product-name')).toHaveText('Combination Pliers');
await expect(page.getByTestId('unit-price')).toHaveText('14.15');
await expect(page.getByTestId('add-to-cart')).toBeVisible();
await expect(page.getByTestId('add-to-favorites')).toBeVisible();
});
