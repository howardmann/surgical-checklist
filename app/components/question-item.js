import Ember from 'ember';
let $ = Ember.$;

export default Ember.Component.extend({
  actions: {
    clickYes(){
      let question = this.get('model');
      question.toggleProperty('isYes');
      if (question.get('isNo')){
        question.toggleProperty('isNo');
      }
      question.save();
    },
    clickNo(){
      let question = this.get('model');
      question.toggleProperty('isNo');
      if (question.get('isYes')){
        question.toggleProperty('isYes');
      }
      question.save();
    }
  }
});
