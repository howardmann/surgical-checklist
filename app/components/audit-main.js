import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },

  auditStore: Ember.inject.service(),

  sections: Ember.computed('audit', function () {
    return this.get('audit.sections');
  }),

  headerSections: Ember.computed('audit', function () {
    return this.get('audit.headerSections');
  }),

  actions: {
    finishAudit() {
      this.get('audit').markComplete();
      this.get('auditStore').saveCurrentAuditToDatabase();
      this.get('router').transitionTo('history');
    }
  }
});
