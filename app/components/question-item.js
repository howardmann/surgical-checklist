import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    this.set('responses', this.get('item.options.responseSet.responses'));
  },

  auditStore: Ember.inject.service(),

  actions: {
    toggle({responseId}) {
      this.get('responses').forEach(resp => {
        if (resp.get('id') !== responseId) {
          resp.set('selected', false);
        }
      });

      this.get('auditStore').preserveCurrent();
    }
  }
});
