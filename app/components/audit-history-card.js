import Ember from 'ember';

export default Ember.Component.extend({
  auditStore: Ember.inject.service(),

  title: Ember.computed('audit', function () {
    const audit = this.get('audit');
    return audit.get('patientName') + ' - ' + audit.get('typeOfSurgery');
  }),

  lastEdit: Ember.computed.alias('audit.lastEdit'),

  complete: Ember.computed.alias('audit.isComplete'),

  actions: {
    openAudit() {
      this.get('auditStore').restoreAudit(this.get('audit'));
      this.get('router').transitionTo('index');
    }
  }
});
