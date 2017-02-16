import Ember from 'ember';
import plTemplate from '../template';

const Item = Ember.Object.extend({
  init() {
    this._super(...arguments);

    const item = this.get('item');
    const allItems = this.get('allItems');
    this.set('subItems',
      allItems
      .filter(i => i.parent_id === item.item_id)
      .map(item => Item.create({item, allItems}))
    );
  },

  title: Ember.computed.alias('item.label'),
  type: Ember.computed.alias('item.type')
});

const Audit = Ember.Object.extend({
  init(){
    this._super(...arguments);
  },

  title: Ember.computed.alias('name'),
  description: Ember.computed.alias('template_data.metadata.description'),

  sections: Ember.computed('items', function() {
    const allItems = this.get('items');
    return allItems
      .filter(i => i.type === 'section')
      .map(item => Item.create({item, allItems}));
  })
});

export default Ember.Route.extend({
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
    return Audit.create(plTemplate);
  }
});
