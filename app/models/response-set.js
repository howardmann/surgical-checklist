import Ember from 'ember';
import Response from './response';

const ResponseSet = Ember.Object.extend({
  init() {
    this._super(...arguments);

    const responses = this.get('response_set.responses')
      .map(response => {
        return Response.create({
          responseSetting: response,
          item: this.get('item'),
          audit: this.get('audit'),
          responseSet: this,
          selectedResponses: this.get('selectedResponses')
        });
      });
    this.set('responses', responses);
  }
});

export default ResponseSet;
