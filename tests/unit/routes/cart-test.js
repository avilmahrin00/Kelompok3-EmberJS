import { module, test } from 'qunit';
import { setupTest } from 'website-ecommmerce/tests/helpers';

module('Unit | Route | cart', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:cart');
    assert.ok(route);
  });
});
