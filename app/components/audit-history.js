import Ember from 'ember';
import plTemplate from '../template';

export default Ember.Component.extend({
  auditStore: Ember.inject.service(),

  templateTitle: plTemplate.name,

  auditHistoryDays: Ember.computed('history.audits', function () {
    const audits = this.get('history.audits');
    const days = {};
    audits.forEach(a => {
      const day = a.get('lastEdit').substr(0, 10);
      days[day] = days[day] || [];
      days[day].push(a);
    });

    let todayDay = new Date();
    let yesterdayDay = new Date(Date.now() - 86400000);
    todayDay = todayDay.toISOString().substr(0, 10);
    yesterdayDay = yesterdayDay.toISOString().substr(0, 10);
    function humanizeDay(day) {
      if (day === todayDay) {
        return 'Today';
      }
      if (day === yesterdayDay) {
        return 'Yesterday';
      }
      return new Date(day).toDateString();
    }

    return Object.keys(days).map(day => {
      return {
        day: humanizeDay(day),
        audits: days[day]
      };
    });
  }),

  actions: {
    startNewAudit() {
      this.get('auditStore').createNewCurrent();
      this.get('auditStore').preserveCurrent();
      this.get('router').transitionTo('index');
    }
  }
});
