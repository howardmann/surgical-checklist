import Ember from 'ember';
import Item from './item';

const Audit = Ember.Object.extend({
  init(){
    this._super(...arguments);
  },

  serialize() {
    // return this.get('audit');
    function toFlat(items) {
      let all = items;
      items.forEach(i => {
        if (i.get('subItems')) {
          all = all.concat(toFlat(i.get('subItems')));
        }
      });
      return all;
    }

    const auditPojo = this.get('audit');

    Ember.set(auditPojo, 'modified_at', new Date().toISOString());

    const sections = this.get('sections');
    const allItems = toFlat(sections);
    const serializedItems = allItems.map(i => i.serialize());
    auditPojo.items.forEach(pojoItem => {
      const serItem = serializedItems.find(i => i.id === pojoItem.item_id);
      pojoItem.responses = serItem.responses;
    });

    const headerSection = this.get('headerSection');
    const allHeaderItems = toFlat([headerSection]);
    const serializedHeaderItems = allHeaderItems.map(i => i.serialize());
    auditPojo.header.forEach(pojoItem => {
      const serItem = serializedHeaderItems.find(i => i.id === pojoItem.item_id);
      pojoItem.responses = serItem.responses;
    });

    return auditPojo;
  },

  getResponseSet(id) {
    return this.get(`audit.template_data.response_sets.${id}`);
  },

  markComplete() {
    const auditPojo = this.get('audit');
    auditPojo.audit_data.date_completed = new Date().toISOString();
  },

  isComplete: Ember.computed(
    'audit.audit_data.date_completed',
    function () {
      return !!this.get('audit.audit_data.date_completed');
    }
  ),

  id: Ember.computed.alias('audit._id'),
  items: Ember.computed.alias('audit.items'),
  header: Ember.computed.alias('audit.header'),
  title: Ember.computed.alias('audit.name'),
  description: Ember.computed.alias(
    'audit.template_data.metadata.description'
  ),
  lastEdit: Ember.computed.alias('audit.modified_at'),

  headerSection: Ember.computed('audit.header', function () {
    const item = this.get('audit.header').find(i => i.type === 'section');
    return Item.create({
      item,
      audit: this,
      items: this.get('audit.header')
    });
  }),

  sections: Ember.computed('audit.items', function () {
    return this.get('audit.items')
      .filter(i => i.type === 'section')
      .map(item => Item.create({
        item,
        audit: this,
        items: this.get('audit.items')
      }));
  }),

  getHeaderResponseById(id) {
    return this.get('headerSection.subItems')
      .find(i => i.get('id') === id)
      .get('text');
  },

  patientName: Ember.computed('audit', function () {
    return this.getHeaderResponseById('f3245d41-ea77-11e1-aff1-0800200c9a66');
  }),

  typeOfSurgery: Ember.computed('audit', function () {
    return this.getHeaderResponseById('f3245d40-ea77-11e1-aff1-0800200c9a66');
  })
});

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function guid() {
  return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

Audit._newAudit = function (template) {
  const audit = JSON.parse(JSON.stringify(template)); // POJO

  audit._id = `audit_${guid()}`;

  audit.audit_data = {
    date_started: new Date().toISOString()
  };

  return audit;
};

Audit.createFromTemplate = function (template) {
  return Audit.createFromAudit(Audit._newAudit(template));
};

Audit.createFromAudit = function (audit) {
  return Audit.create({audit});
};

export default Audit;
