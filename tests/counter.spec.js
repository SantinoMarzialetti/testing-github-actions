// @ts-check
import { test, expect } from '@playwright/test';

const BASE = process.env.BASE_URL || 'http://localhost:5173/';

test.describe('Contador', () => {
  test('incrementa al hacer click en el botón', async ({ page }) => {
    await page.goto(BASE);

    // Localiza el botón que muestra el contador (inicio en 0)
    const button = page.getByRole('button', { name: /count is 0/i });
    await expect(button).toBeVisible();

    // Haz click y verifica incrementos
    await button.click();
    await expect(page.getByRole('button', { name: /count is 1/i })).toBeVisible();

    await page.getByRole('button').click();
    await expect(page.getByRole('button', { name: /count is 2/i })).toBeVisible();
  });
});
