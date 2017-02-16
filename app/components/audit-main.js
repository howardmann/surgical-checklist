import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    const show = this.get('auditStore').listAllSavedAudits().length > 0;
    this.set('showHistoryButton', show);
  },

  auditStore: Ember.inject.service(),

  sections: Ember.computed('audit', function () {
    return this.get('audit.sections');
  }),

  showHistoryButton: false,

  actions: {
    finishAudit() {
      this.get('auditStore').saveCurrentAuditToDatabase();
    },

    showSavedAudits() {
      this.get('router').transitionTo('history');
      this.set('showHistoryButton', true);
    }
  }
});
