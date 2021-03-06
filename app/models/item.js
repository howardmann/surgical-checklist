import Ember from 'ember';
import ItemOptions from './item-options';

const Item = Ember.Object.extend({
  init() {
    this._super(...arguments);

    const item = this.get('item');
    const subItems = this.get('items')
      .filter(i => {
        return i.parent_id === item.item_id && this.smartfieldCheck(i);
      })
      .map(item => Item.create({
        item,
        audit: this.get('audit'),
        items: this.get('items')
      }));
    this.set('subItems', subItems);

    const options = ItemOptions.create({
      options: this.get('item.options'),
      audit: this.get('audit'),
      selectedResponses: this.get('item.responses'),
      item: this
    });
    this.set('options', options);

    this.set('text', this.get('item.responses.text'));
    this.set('datetime', this.get('item.responses.datetime'));
  },

  serialize() {
    const itemSer = {
      id: this.get('item.item_id'),
      responses: this.get('options').serializeResponses()
    };

    if (this.get('type') === 'text' || this.get('type') === 'textsingle') {
      itemSer.responses.text = this.get('text') || '';
    }

    if (this.get('type') === 'datetime') {
      itemSer.responses.datetime = this.get('datetime') || '';
    }

    return itemSer;
  },

  smartfieldCheck(subItem) {
    if (subItem.type !== 'smartfield') {
      return true;
    }

    if (this.get('type') === 'checkbox') {
      const checkedValue = '4e671f40-e4ff-11e1-aff1-0800200c9a66';
      // TODO finishup value check
      return subItem.options.condition === checkedValue;
    }

    return true;
  },

  title: Ember.computed.alias('item.label'),
  type: Ember.computed.alias('item.type'),
  id: Ember.computed.alias('item.item_id'),
  text: '',
  datetime: ''
});

export default Item;
