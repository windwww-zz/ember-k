/*jshint node:true*/
//import Ember from 'ember';  

var RSVP = require('rsvp');
//var RSVP = Ember.RSVP;
module.exports = {
  description: '',
  normalizeEntityName: function() {},
  isDevelopingAddon: function() {  
    return false;
  },

  afterInstall: function() {
    /*
    return RSVP.all([
      this.addPackageToProject('ember-k'),
      this.addPackageToProject('kinto'),
      this.addAddonToProject('ember-browserify'),
      //this.addPackageToProject('babel-runtime'),
    ]);*/
    /*return this.addPackageToProject('kinto')/*.then(()=>{
      return this.addAddonToProject('ember-browserify');
    });*/
    /*
    var promise = new RSVP.Promise((resolve, reject) => {
      this.addAddonToProject('ember-browserify').then(()=>{
        this.addPackageToProject('kinto').then(()=>{
          resolve();
        });
      });
    });

    return promise;*/
    return this.addAddonToProject('ember-browserify');
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
