import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | post/comment', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:post/comment');
    assert.ok(route);
  });
});
