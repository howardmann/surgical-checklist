import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    if (this.get('item.text')) {
      this.set('text', this.get('item.text'));
    }
  },

  auditStore: Ember.inject.service(),

  text: '',

  actions: {
    updateText() {
      this.set('item.text', this.get('text'));
      this.get('auditStore').preserveCurrent();
    }
  }
});
