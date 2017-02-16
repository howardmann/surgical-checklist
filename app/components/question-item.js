import Ember from 'ember';

export default Ember.Component.extend({
  responses: Ember.computed('item', function () {
    return this.get('item.options.responseSet.responses');
  }),

  actions: {
    toggle({responseId, value}) {
      this.get('responses').forEach(resp => {
        if (resp.get('id') !== responseId) {
          resp.set('selected', false);
        }
      });
    }
  }
});
