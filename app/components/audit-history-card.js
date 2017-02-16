import Ember from 'ember';

export default Ember.Component.extend({
  auditStore: Ember.inject.service(),

  actions: {
    openAudit() {
      this.get('auditStore').restoreAudit(this.get('audit'));
      this.get('router').transitionTo('index');
    }
  }
});
