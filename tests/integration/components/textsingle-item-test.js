import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('textsingle-item', 'Integration | Component | textsingle item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{textsingle-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#textsingle-item}}
      template block text
    {{/textsingle-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
