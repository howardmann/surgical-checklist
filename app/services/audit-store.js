import Ember from 'ember';
import plTemplate from '../template';
import Audit from '../models/audit';

export default Ember.Service.extend({
  currentAudit: null,

  tryRestoreLastAudit() {
    const audit = JSON.parse(localStorage.getItem('_currentAudit'));

    const newCurrent = audit ?
      Audit.createFromAudit(audit) : Audit.createFromTemplate(plTemplate);

    this.set('currentAudit', newCurrent);
    return newCurrent;
  },

  createNewCurrent() {
    const audit = Audit.createFromTemplate(plTemplate);
    this.set('currentAudit', audit);
    return audit;
  },

  preserveCurrent() {
    localStorage.setItem(
      '_currentAudit',
      JSON.stringify(this.get('currentAudit').serialize())
    );
  },

  saveAudit(audit) {
    localStorage.setItem(
      audit.get('id'),
      JSON.stringify(audit.serialize())
    );
  }
});
