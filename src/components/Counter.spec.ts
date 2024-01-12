import { test, expect } from '@playwright/experimental-ct-vue'
import Counter from './Counter.vue';

test('Counter render', async ({ mount }) => {
  const component = await mount(Counter);
  await expect(component).toContainText('Counter');
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

// test('decrease', async ({ mount }) => {

//   const component = await mount(Counter, {
//     props:{initCount:1}
//   });
//   await expect(component.getByTestId('count')).toContainText('0');

//   await component.getByRole('button', { name: 'increase' }).click();
//   await expect(component.getByTestId('count')).toContainText('1');
// })