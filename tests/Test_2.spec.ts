import { test, expect } from '@playwright/test';

test('Test 2: Verify user can view product details', async ({ page }) => {
await page.goto('/');
await page.getByAltText('Combination Pliers').click();

await expect(page).toHaveURL(/https:\/\/practicesoftwaretesting\.com\/product/);
await expect(page.getByTestId('product-name')).toHaveText('Combination Pliers');
await expect(page.getByTestId('unit-price')).toHaveText('14.15');
await expect(page.getByTestId('add-to-cart')).toBeVisible();
await expect(page.getByTestId('add-to-favorites')).toBeVisible();
});
