import Ember from 'ember';
import ResponseSet from './response-set';

const ItemOptions = Ember.Object.extend({
  init() {
    this._super(...arguments);

    const setId = this.get('options.response_set');
    if (setId) {
      const responseSet = ResponseSet.create({
          response_set: this.get('audit').getResponseSet(setId),
          item: this.get('item'),
          audit: this.get('audit'),
          selectedResponses: this.get('selectedResponses')
        }
      );
      this.set('responseSet', responseSet);
    }
  },

  serializeResponses() {
    const responses = {};

    const responseSet = this.get('responseSet');
    if (responseSet) {
      let response = responseSet.get('responses')
        .filter(resp => {
          return resp.get('selected');
        })
        .map(resp => {
          return resp.get('id');
        });
      responses.response = response;
    }

    return responses;
  }
});

export default ItemOptions;
