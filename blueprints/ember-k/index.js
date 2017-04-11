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
<<<<<<< HEAD
      this.addPackageToProject('ember-k'),
      this.addPackageToProject('kinto'),
      this.addAddonToProject('ember-browserify'),
=======
      //this.addPackageToProject('ember-k'),
      //this.addPackageToProject('kinto'),
      //this.addAddonToProject('ember-browserify'),
>>>>>>> e52da8398cb6decc7bd37d29c136b9fa40bbcbbf
      //this.addPackageToProject('babel-runtime'),
    ]);*/
    console.log('0.0.37\n\n');
    /*return this.addPackageToProject('kinto')/*.then(()=>{
      return this.addAddonToProject('ember-browserify');
    });*/
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
