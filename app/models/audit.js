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

    const sections = this.get('sections');
    const allItems = toFlat(sections);

    const serializedItems = allItems.map(i => i.serialize());
    const auditPojo = this.get('audit');
    auditPojo.items.forEach(pojoItem => {
      const serItem = serializedItems.find(i => i.id === pojoItem.item_id);
      pojoItem.responses = serItem.responses;
    });

    return auditPojo;
  },

  getResponseSet(id) {
    return this.get(`audit.template_data.response_sets.${id}`);
  },

  id: Ember.computed.alias('audit._id'),
  items: Ember.computed.alias('audit.items'),
  header: Ember.computed.alias('audit.header'),
  title: Ember.computed.alias('audit.name'),
  description: Ember.computed.alias(
    'audit.template_data.metadata.description'
  ),

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

  return audit;
};

Audit.createFromTemplate = function (template) {
  return Audit.createFromAudit(Audit._newAudit(template));
};

Audit.createFromAudit = function (audit) {
  return Audit.create({audit});
};

export default Audit;
