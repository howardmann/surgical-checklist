import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    const show = this.get('auditStore').listAllSavedAudits().length > 0;
    this.set('showHistoryButton', show);
  },

  auditStore: Ember.inject.service(),

  showHistoryButton: false,

  actions: {
    showSavedAudits() {
      this.get('auditStore').saveCurrentAuditToDatabase();
      this.get('router').transitionTo('history');
    }
  }
});
