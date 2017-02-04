import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addItem(value){
      // Return and reset if blank
      if (!value || !value.trim()){ return this.set('newItem', ''); }
      // Create new record and save
      let newTodo = this.model.store.createRecord('todo',{
        title: value,
        isComplete: false
      });
      newTodo.save();
      // Reset input value to blank
      this.set('newItem', '');
    },
    deleteItem(item){
      item.destroyRecord();
    },
    checkItem(item){
      item.toggleProperty('isComplete');
      item.save();
    },
    editItem(item){
      item.toggleProperty('isEdit');
    },
    updateItem(item){
      // Reset and return if blank
      if (!item.get('title') || !item.get('title').trim()){ return ; }
      // Turn edit property off and then persist the update
      item.toggleProperty('isEdit');
      item.save();
    }
  }
});
