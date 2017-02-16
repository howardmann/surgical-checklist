import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggle() {
      this.set('response.selected', !this.get('response.selected'));
      this.sendAction('toggle', {
        responseId: this.get('response.id'),
        value: this.get('response.selected')
      });
    }
  }
});
