import Ember from 'ember';
import plTemplate from '../template';

const Response = Ember.Object.extend({});

const ResponseSet = Ember.Object.extend({
  init() {
    this._super(...arguments);
  },

  responses: Ember.computed('responseSet', function () {
    return this.get('responseSet.responses').map(resp => {
      return Response.create(resp);
    });
  })
});

const ItemOptions = Ember.Object.extend({
  init() {
    this._super(...arguments);
  },

  responseSet: Ember.computed('options', function () {
    const setId = this.get('options.response_set');
    return ResponseSet.create({
        responseSet: this.get('audit').getResponseSet(setId)
      }
    );
  })
});

const Item = Ember.Object.extend({
  init() {
    this._super(...arguments);
  },

  smartfieldCheck(subItem) {
    if (subItem.type !== 'smartfield') {
      return true;
    }

    if (this.get('type') === 'checkbox') {
      const checkedValue = '4e671f40-e4ff-11e1-aff1-0800200c9a66';
      // TODO finishup
      return subItem.options.condition === checkedValue;
    }

    return true;
  },

  subItems: Ember.computed('item', 'audit.items', function () {
    const item = this.get('item');
    return this.get('audit.items')
      .filter(i => {
        return i.parent_id === item.item_id && this.smartfieldCheck(i);
      })
      .map(item => Item.create({item, audit: this.get('audit')}));
  }),

  options: Ember.computed('item', function () {
    return ItemOptions.create({
      options: this.get('item.options'),
      audit: this.get('audit')
    });
  }),

  title: Ember.computed.alias('item.label'),
  type: Ember.computed.alias('item.type')
});

const Audit = Ember.Object.extend({
  init(){
    this._super(...arguments);
  },

  getResponseSet(id) {
    return this.get(`audit.template_data.response_sets.${id}`);
  },

  items: Ember.computed.alias('audit.items'),
  title: Ember.computed.alias('audit.name'),
  description: Ember.computed.alias(
    'audit.template_data.metadata.description'
  ),

  sections: Ember.computed('audit.items', function () {
    return this.get('audit.items')
      .filter(i => i.type === 'section')
      .map(item => Item.create({item, audit: this}));
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
    return Audit.create({audit: plTemplate});
  }
});
