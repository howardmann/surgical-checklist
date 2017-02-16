import Ember from 'ember';

// const Item = Ember.Object.extend({
//   init() {
//     this._super(...arguments);
//
//     const allItems = this.get('allItems');
//     this.subItems = allItems
//       .filter(i => i.parent_id === item.item_id)
//       .map(item => Item.create({item, allItems}));
//   }
// })
//
// const Audit = Ember.Object.extend({
//   init(){
//     this._super(...arguments);
//   },
//   sections: Ember.computed('items', function() {
//     const allItems = this.get('items');
//     return allItems
//       .filter(i => i.type === 'section')
//       .map(item => Item.create({item, allItems}));
//   })
// });

export default Ember.Route.extend({
  beforeModel(){
    this.store.findAll('item').then((data)=>{
      if(data.get('length') == 0) {
        this.store.createRecord('item',{title: 'Has the patient confirmed his/ her identity, site, procedure and consent?'}).save();
        this.store.createRecord('item',{title: 'Has the site been marked?'}).save();
        this.store.createRecord('item',{title: 'Is the anaesthesia machine and medication check complete?'}).save();
      }
    });
    
    this.store.findAll('section').then((data)=>{
      if(data.get('length') == 0) {
        this.store.createRecord('section',{title: '1. Before induction of anasthesia'}).save();
        this.store.createRecord('section',{title: '2. Before skin incision'}).save();
        this.store.createRecord('section',{title: '3. Before patient leaves operating room'}).save();
      }
    });

  },
  model(){
    return this.store.findAll('section');
  }
});
