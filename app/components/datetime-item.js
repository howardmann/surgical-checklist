import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    if (this.get('item.datetime')) {
      this.set('datetime', this.get('item.datetime'));
    }
  },

  auditStore: Ember.inject.service(),

  datetime: '',

  actions: {
    updateDatetime() {
      this.set('item.datetime', this.get('datetime'));
      this.get('auditStore').preserveCurrent();
    }
  }
});
