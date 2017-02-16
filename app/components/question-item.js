import Ember from 'ember';

export default Ember.Component.extend({
  buttons: Ember.computed('item', function () {
    return this.get('item.options.responseSet.responses');
  })
});
