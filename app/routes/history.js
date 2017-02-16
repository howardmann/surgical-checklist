import Ember from 'ember';

export default Ember.Route.extend({
  auditStore: Ember.inject.service(),

  model(){
    return {
      audits: this.get('auditStore').listAllSavedAudits()
    };
  }
});
