import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').query('task', {filters:{description:'Tue Apr 12 2017 15:00:41 GMT+0800 (台北標準時間)'}});
  },
  
});
