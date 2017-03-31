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
    return RSVP.all([
      //this.addPackageToProject('ember-k'),
      //this.addPackageToProject('kinto'),
      this.addAddonToProject('ember-browserify'),
      //this.addPackageToProject('babel-runtime'),
    ]);
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
