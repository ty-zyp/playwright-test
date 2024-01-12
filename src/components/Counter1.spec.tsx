import { test, expect } from '@playwright/experimental-ct-vue'
import Counter from './Counter.vue';

test('Counter render', async ({ mount }) => {
  const component = await mount(Counter);
  await expect(component).toContainText('Counter');

  await expect(component).toHaveScreenshot() // 快照
})

test('find 0', async ({ mount }) => {
  const component = await mount(Counter);
  await expect(component.getByTestId('count')).toContainText('0');
})

test('increase', async ({ mount }) => {
  const component = await mount(Counter);
  await expect(component.getByTestId('count')).toContainText('0');

  await component.getByRole('button', { name: 'increase' }).click();
  await expect(component.getByTestId('count')).toContainText('1');
})

test('decrease', async ({ mount }) => {
  const component = await mount(<Counter initCount={1}/>);
  await expect(component.getByTestId('count')).toContainText('1');

  await component.getByRole('button', { name: 'decrease' }).click();
  await expect(component.getByTestId('count')).toContainText('0');
})

test('min', async ({ mount }) => {
  const component = await mount(<Counter initCount={1} min={0} />);
  await expect(component.getByTestId('count')).toContainText('1');
  await component.getByRole('button', { name: 'decrease' }).click();
  await expect(component.getByTestId('count')).toContainText('0');
  await component.getByRole('button', { name: 'decrease' }).click();
  await expect(component.getByTestId('count')).toContainText('0');
})

test('max', async ({ mount }) => {
  const component = await mount(<Counter initCount={9} max={10} />);
  await expect(component.getByTestId('count')).toContainText('9');
  await component.getByRole('button', { name: 'increase' }).click();
  await expect(component.getByTestId('count')).toContainText('10');
  await component.getByRole('button', { name: 'increase' }).click();
  await expect(component.getByTestId('count')).toContainText('10');
})


// import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'increase' }).click();
  await page.getByRole('button', { name: 'decrease' }).click();
  await page.getByRole('button', { name: 'increase' }).click();
  await page.getByRole('button', { name: 'decrease' }).click();
  await page.getByRole('button', { name: 'increase' }).click();
  await page.getByRole('button', { name: 'decrease' }).click();
  await page.getByRole('button', { name: 'decrease' }).click();
  await page.getByRole('button', { name: 'increase' }).dblclick();
  await page.getByRole('button', { name: 'increase' }).click({
    clickCount: 7
  });
  await page.getByRole('button', { name: 'increase' }).click({
    clickCount: 8
  });
  await page.getByRole('button', { name: 'decrease' }).click({
    clickCount: 3
  });
  await page.getByRole('button', { name: 'increase' }).click({
    clickCount: 12
  });
  await page.getByRole('button', { name: 'decrease' }).click({
    clickCount: 3
  });
});
