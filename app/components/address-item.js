import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    if (this.get('item.location')) {
      this.set('location', this.get('item.location'));
    }
  },

  auditStore: Ember.inject.service(),

  location: '',

  actions: {
    updateText() {
      this.set('item.location', this.get('location'));
      this.get('auditStore').preserveCurrent();
    }
  }
});
