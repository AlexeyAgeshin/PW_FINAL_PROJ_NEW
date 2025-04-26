import { test, expect } from '@playwright/test';

test('Test 3: Verify user can add product to cart', async ({ page }) => {
  await page.goto('/');
  await page.getByAltText('Slip Joint Pliers').click();
  

  await expect(page).toHaveURL(/https:\/\/practicesoftwaretesting\.com\/product/);
  

  await expect(page.getByTestId('product-name')).toBeVisible();
  await expect(page.getByTestId('unit-price')).toHaveText('9.17');

  await page.getByTestId('add-to-cart').click();


  const alert = page.getByRole('alert', { name: 'Product added to shopping' });

  await expect(alert).toBeVisible();
  await expect(alert).toHaveText('Product added to shopping cart.');

  await expect(alert).toBeHidden({timeout: 8000});

  await expect(page.getByTestId('quantity')).toHaveValue('1');

  await page.getByTestId('nav-cart').click();

  await expect(page).toHaveURL('/checkout');

  await expect(page.getByTestId('nav-cart')).toHaveText('1');
  await expect(page.getByTestId('product-title')).toHaveText('Slip Joint Pliers');
  await expect(page.getByTestId('proceed-1')).toBeVisible();
});
