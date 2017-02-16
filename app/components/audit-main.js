import Ember from 'ember';

export default Ember.Component.extend({
  auditStore: Ember.inject.service(),

  sections: Ember.computed('audit',function(){
    return this.get('audit.sections');
  }),

  actions: {
    finishAudit() {
      this.get('auditStore').saveCurrentAuditToDatabase();
    }
  }
});
