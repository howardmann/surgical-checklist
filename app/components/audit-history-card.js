import Ember from 'ember';

export default Ember.Component.extend({
  auditStore: Ember.inject.service(),

  title: Ember.computed('audit', function () {
    const audit = this.get('audit');
    return audit.get('patientName') + ' - ' + audit.get('typeOfSurgery');
  }),

  lastEdit: Ember.computed('audit.lastEdit', function () {
    const lastEditString = this.get('audit.lastEdit');
    return new Date(lastEditString).toUTCString();
  }),

  complete: Ember.computed.alias('audit.isComplete'),

  actions: {
    openAudit() {
      this.get('auditStore').restoreAudit(this.get('audit'));
      this.get('router').transitionTo('index');
    }
  }
});
