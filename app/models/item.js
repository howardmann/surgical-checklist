import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isYes: DS.attr('boolean', {defaultValue: false}),
  isNo: DS.attr('boolean', {defaultValue: false}),
});
