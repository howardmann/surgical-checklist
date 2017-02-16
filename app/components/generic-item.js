import Ember from 'ember';

export default Ember.Component.extend({
  itemComponentName: Ember.computed('item', function () {
    return this.get('item.type') + '-item';
  })
});
