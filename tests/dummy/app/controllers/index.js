/* global console */
import Ember from 'ember';
import K from 'ember-k';

export default Ember.Controller.extend({
  init(){
    console.log('dummy');
    console.log(K);
    var task = this.store.createRecord('task', {title:"Title", description: Date().toString(), _syncStrategy: 'SERVER_WINS'});
    task.save();
  },
  actions:{
    remove(id){
      this.get('store').findRecord('task', id, { backgroundReload: false }).then(function(task) {
        task.deleteRecord();
        task.save();
      });
    },
    
    update(id, description){
      this.get('store').findRecord('task', id, { backgroundReload: false }).then(function(task) {
        task.set('description', description);
        task.save();
      });
    },
    
    
  }
});
