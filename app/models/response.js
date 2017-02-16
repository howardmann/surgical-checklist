import Ember from 'ember';

const Response = Ember.Object.extend({
  init() {
    const responseSettingId = this.get('responseSetting.id');
    const selectedId = this.get('selectedResponses.response[0]');

    this.get('selected', responseSettingId === selectedId);
  },

  selected: false,
  id: Ember.computed.alias('responseSetting.id'),
  label: Ember.computed.alias('responseSetting.label'),
  colour: Ember.computed.alias('responseSetting.colour')
});


export default Response;
