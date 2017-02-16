import Ember from 'ember';
import plTemplate from '../template';

export default Ember.Component.extend({
  auditStore: Ember.inject.service(),

  templateTitle: plTemplate.name,

  actions: {
    startNewAudit() {
      this.get('auditStore').createNewCurrent();
      this.get('auditStore').preserveCurrent();
      this.get('router').transitionTo('index');
    }
  }
});
