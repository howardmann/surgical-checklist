import Ember from 'ember';

export default Ember.Component.extend({
  sections: Ember.computed('audit',function(){
    return this.get('audit.sections');
  })
});
