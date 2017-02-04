import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addItem(value){
      // let id = this.get('allItems').length + 1;
      // let item = {id: id, title: value, isComplete: false};
      // this.get('allItems').pushObject(item);
      // // Clear form
      // $('input[type="text"]').val('');

      // Return if blank
      if (!value.trim()){ return; }
      // Create new record and save
      let newTodo = this.store.createRecord('todo',{
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
    }
  }
});


// var title = this.get('newTitle');
// if (!title.trim()) { return; }
//
// var todo = this.store.createRecord('todo', {
//   title: title,
//   isCompleted: false
// });
//
// this.set('newTitle', '');
//
// todo.save();
