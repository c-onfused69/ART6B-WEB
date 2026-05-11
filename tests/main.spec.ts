import { test, expect } from '@playwright/test';

test.describe('Main UI Script Tests', () => {
  // Use a mobile or tablet viewport to ensure the menu button is visible
  test.use({ viewport: { width: 375, height: 667 } });

  test('menu button toggles header state', async ({ page }) => {
    // Navigate to the local server
    await page.goto('/');

    const header = page.locator('#header');
    const menuBtn = page.locator('#menu-btn');

    // Wait for the elements to be present
    await expect(header).toBeAttached();
    await expect(menuBtn).toBeAttached();

    // Verify initial state is not active (might be undefined or empty string, checking for non-existence of data-state="active")
    await expect(header).not.toHaveAttribute('data-state', 'active');

    // Click the menu button to open
    await menuBtn.click();

    // Verify it changes to active
    await expect(header).toHaveAttribute('data-state', 'active');

    // Click the menu button to close
    await menuBtn.click();

    // Verify it changes to closed
    await expect(header).toHaveAttribute('data-state', 'closed');
  });
});
