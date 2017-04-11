//import DS from 'ember-data';
import K from 'ember-k';

export default K['k-adapter'].extend({
  remote: 'https://kinto.dev.mozaws.net/v1/',
});
