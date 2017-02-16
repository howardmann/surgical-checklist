import Ember from 'ember';

export default Ember.Route.extend({
  auditStore: Ember.inject.service(),

  beforeModel(){
    // this.store.findAll('item').then((data)=>{
    //   if(data.get('length') == 0) {
    //     this.store.createRecord('item',{title: 'Has the patient confirmed his/ her identity, site, procedure and consent?'}).save();
    //     this.store.createRecord('item',{title: 'Has the site been marked?'}).save();
    //     this.store.createRecord('item',{title: 'Is the anaesthesia machine and medication check complete?'}).save();
    //   }
    // });
    //
    // this.store.findAll('section').then((data)=>{
    //   if(data.get('length') == 0) {
    //     this.store.createRecord('section',{title: '1. Before induction of anasthesia'}).save();
    //     this.store.createRecord('section',{title: '2. Before skin incision'}).save();
    //     this.store.createRecord('section',{title: '3. Before patient leaves operating room'}).save();
    //   }
    // });

  },
  model(){
    return this.get('auditStore').tryRestoreLastAudit();
  }
});
