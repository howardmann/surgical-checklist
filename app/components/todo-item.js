import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    delete(value){
      this.attrs.dynamic(value);
    },
    check(value){
      this.attrs.check(value);
    },
    edit(value){
      this.attrs.edit(value);
    },
    update(value){
      this.attrs.update(value);
    }
  }
});
