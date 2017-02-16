import Ember from 'ember';

export default Ember.Route.extend({
  auditStore: Ember.inject.service(),

  beforeModel(){
  },
  model(){
    return this.get('auditStore').tryRestoreLastAudit();
  }
});
