import Ember from 'ember';
import DS from 'ember-data';
import Kinto from 'npm:kinto'; //todo: put this to service

export default DS.Adapter.extend({
  __collections: [], //cache kintojs collection instants, todo: put this to service
  
  //below four properties are to be overided
  remote: null,
  headers: {"Authorization": "Basic ZW1iZXItazpwYXNzd29yZA=="}, //ember-k:password
  bucket: 'ember',
  dbPrefix: '',
  
  db: null,
  
  init(){
    Ember.debug('adapter init start');
    this.db = new Kinto({
      remote: this.remote,
      headers: this.headers,
      bucket: this.bucket,
      dbPrefix: this.dbPrefix,
    });
    Ember.debug('adapter init end');
  },
  
  getCollectionByModelName(modelName){
    var emberModelName = Ember.String.pluralize(
      Ember.String.dasherize(modelName)
    );
    return this.__collections[emberModelName] || this.db.collection(emberModelName);
  },
  
  createRecord(store, type, snapshot) {
    console.log(snapshot);
    let data = this.serialize(snapshot);
    let collection = this.getCollectionByModelName(type.modelName);
    //console.log('Adapter#createRecord ', data, snapshot);
    //console.log(data, snapshot);
    
    return new Ember.RSVP.Promise((resolve, reject) => {
      //console.log('KintoAdapter:\nDebug from Model: '+type.modelName+' (adapter#createRecord) data', data);
      collection
        .create(data)
        .then(record => {
          //console.log('KintoAdapter:\nDebug from Model: '+type.modelName+' (adapter#createRecord) data', data, record.data);
          //console.log(data, record.data);

          collection.sync().then((/*obj*/) => {
            Ember.run.join(null, resolve, record.data);
          }).catch(err => {
            console.log('KintoAdapter:\nError from Model: '+type.modelName+' (adapter#createRecord)', err);
            reject(err);
          });

        })
        .catch(err => {
          console.log('KintoAdapter:\nError from Model: '+type.modelName+' (adapter#createRecord)', err);
          reject(err);
        });
    });

  },
  
  findRecord(store, type, id) {
    let collection = this.getCollectionByModelName(type.modelName);

    return new Ember.RSVP.Promise((resolve, reject) => {
      collection
        .get(id)
        .then(record => {
          Ember.run.join(null, resolve, record.data);
        }).catch(err => {
          console.log('KintoAdapter:\nError from Model: '+type.modelName+' (adapter#findRecord)', err);
          reject(err);
        });
    });
  },
  
  findAll(store, type/*, sinceToke*/) {
    //console.log('s', sinceToken);
    let collection = this.getCollectionByModelName(type.modelName);

    return new Ember.RSVP.Promise((resolve, reject) => {
      collection
        .list()
        .then(record => {
          Ember.run.join(null, resolve, record.data);
        }).catch(err => {
          console.log('KintoAdapter:\nError from Model: '+type.modelName+' (adapter#findAll)', err);
          reject(err);
        });
    });
  },
  
  deleteRecord(store, type, snapshot) {
    let id = snapshot.id;
    let collection = this.getCollectionByModelName(type.modelName);
    console.log('remove', id);

    return new Ember.RSVP.Promise((resolve, reject) => {
      collection
        .delete(id)
        .then(record => {
          collection.sync().then((/*obj*/) => {
            Ember.run.join(null, resolve, record.data);
          }).catch(err => {
            console.log('KintoAdapter:\nError from Model: '+type.modelName+' (adapter#deleteRecord)', err);
            reject(err);
          });
        })
        .catch(err => {
          console.log('KintoAdapter:\nError from Model: '+type.modelName+' (adapter#deleteRecord)', err);
          reject(err);
        });
    });
  },
  
  updateRecord(store, type, snapshot) {

    let data = this.serialize(snapshot, { includeId: true });
    let collection = this.getCollectionByModelName(type.modelName);

    return new Ember.RSVP.Promise((resolve, reject) => {
      collection
        .update(data)
        .then(record => {
          //console.log('KintoAdapter:\nDebug from Model: '+type.modelName+' (adapter#createRecord) data', data, record.data);
          //console.log(data, record.data);

          collection.sync().then((/*obj*/) => {
            Ember.run.join(null, resolve, record.data);
          }).catch(err => {
            console.log('KintoAdapter:\nError from Model: '+type.modelName+' (adapter#updateRecord)', err);
            reject(err);
          });

        })
        .catch(err => {
          console.log('KintoAdapter:\nError from Model: '+type.modelName+' (adapter#updateRecord)', err);
          reject(err);
        });
    });
  },
  
  query(store, type, query) {
    let collection = this.getCollectionByModelName(type.modelName);
    
    return new Ember.RSVP.Promise((resolve, reject) => {
      console.log(query);
      collection
        .list(query)
        .then(record => {
          Ember.run.join(null, resolve, record.data);
        }).catch(err => {
          console.log('KintoAdapter:\nError from Model: '+type.modelName+' (adapter#query)', err);
          reject(err);
        });
    });

  },
  
  


});