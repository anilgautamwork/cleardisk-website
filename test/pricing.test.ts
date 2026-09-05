import { test } from 'node:test';
import assert from 'node:assert/strict';
import { currencyFor, localPrice } from '../lib/pricing.ts';
void test('maps visitor countries to the currencies Stripe will present', () => {
  assert.equal(currencyFor('IN'), 'INR');
  assert.equal(currencyFor('gb'), 'GBP');
  assert.equal(currencyFor('AE'), 'AED');
  for (const c of ['DE', 'FR', 'NL', 'IE']) assert.equal(currencyFor(c), 'EUR');
  for (const c of ['US', 'CA', 'AU', 'JP', '', null, undefined])
    assert.equal(currencyFor(c), 'USD');
});
void test('formats each local price the way the checkout shows it', () => {
  assert.deepEqual(localPrice('IN'), {
    code: 'INR',
    amount: 599,
    display: '₹599',
  });
  assert.equal(localPrice('DE').display, '€8');
  assert.equal(localPrice('GB').display, '£8');
  assert.equal(localPrice('AE').display, 'AED 36.73');
  assert.equal(localPrice('US').display, '$10');
});
