import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    const stringDatetime = this.get('item.datetime');
    if (stringDatetime) {
      this.set('prettyDatetime', new Date(stringDatetime).toUTCString());
    } else {
      const datetime = new Date();
      this.set('prettyDatetime', datetime.toUTCString());
      this.set('item.datetime', datetime.toISOString());
      this.get('auditStore').preserveCurrent();
    }
  },

  auditStore: Ember.inject.service(),

  prettyDatetime: ''
});
