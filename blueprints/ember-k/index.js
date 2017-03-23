/*jshint node:true*/
import Ember from 'ember';  

//var RSVP = require('rsvp');
var RSVP = Ember.RSVP;
module.exports = {
  description: '',
  normalizeEntityName: 'ember-k',

  afterInstall: function() {
    return RSVP.all([
      this.addPackageToProject('ember-k'),
      this.addPackageToProject('kinto'),
      //this.addAddonToProject('ember-browserify'),
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
