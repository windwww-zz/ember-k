/*jshint node:true*/
var RSVP = require('rsvp');
module.exports = {
  description: '',
  normalizeEntityName: function() {},

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
