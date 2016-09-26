var RSVP = require('rsvp');

module.exports = {

  name: 'ember-gestures',

  normalizeEntityName: function() {},

  afterInstall: function() {
    var bowerPackages = [
      { name: 'hammer.js', target: '2.0.6' }
    ];
    return RSVP.all([
      this.addBowerPackagesToProject(bowerPackages),
      this.addAddonToProject({ name:'ember-hammertime', target:'1.0.0' })
    ]);
  }

};
