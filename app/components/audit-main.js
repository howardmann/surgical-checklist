import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },

  auditStore: Ember.inject.service(),

  sections: Ember.computed('audit', function () {
    return this.get('audit.sections');
  }),

  actions: {
    finishAudit() {
      this.get('auditStore').saveCurrentAuditToDatabase();
      this.get('router').transitionTo('history');
    }
  }
});
