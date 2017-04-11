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
/*
  afterInstall: function() {
  },
*/

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
