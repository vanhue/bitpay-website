'use strict';

(function() {

  // Create a queue, but don't obliterate an existing one!
  var analytics = window.analytics = window.analytics || [];

  // If the real analytics.js is already on the page return.
  if (analytics.initialize) { return; }

  // If the snippet was invoked already show an error.
  if (analytics.invoked) {
    if (window.console && console.error) {
      console.error('Segment snippet included twice.');
    }
    return;
  }

  // Invoked flag, to make sure the snippet
  // is never invoked twice.
  analytics.invoked = true;

  // A list of the methods in Analytics.js to stub.
  analytics.methods = [
    'trackSubmit',
    'trackClick',
    'trackLink',
    'trackForm',
    'pageview',
    'identify',
    'reset',
    'group',
    'track',
    'ready',
    'alias',
    'page',
    'once',
    'off',
    'on'
  ];

  // Define a factory to create stubs. These are placeholders
  // for methods in Analytics.js so that you never have to wait
  // for it to load to actually record data. The `method` is
  // stored as the first argument, so we can replay the data.
  analytics.factory = function(method) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        analytics.push(args);
        return analytics;
      };
    };

  // For each of our methods, generate a queueing stub.
  for (var i = 0; i < analytics.methods.length; i++) {
    var key = analytics.methods[i];
    analytics[key] = analytics.factory(key);
  }

  // Define a method to load Analytics.js from our CDN,
  // and that will be sure to only ever load it once.
  analytics.load = function(key) {
      // Create an async script element based on your key.
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = ('https:' === document.location.protocol ?
      'https://' : 'http://') +
      'cdn.segment.com/analytics.js/v1/' +
      key + '/analytics.min.js';

      // Insert our script next to the first script element.
      var first = document.getElementsByTagName('script')[0];
      first.parentNode.insertBefore(script, first);
    };

  // Add a version to keep track of what's in the wild.
  analytics.SNIPPET_VERSION = '3.1.0';

  // Load Analytics.js with your key, which will automatically
  // load the tools you've enabled for your account. Boosh!
  if (window.location.host === 'bitpay.com') {
    analytics.load('wnr2h1ly5s');
  } else if (window.location.host === 'test.bitpay.com') {
    analytics.load('qsi42b1dn7');
  } else if (window.location.host.split(':')[0] === 'localhost' ||
   this.location.host.split(':')[1] === '8088') {
    analytics.load('q50cjcd7tx');
  } else if (window.location.host.split(':')[0] === 'file') {
    analytics.load('aggkeymxlk');
  } else {
    analytics.load('xT31BDiOQK9CN6PICpxAhFqHacoLc2VP');
  }

  // Make the first page call to load the integrations. If
  // you'd like to manually name or tag the page, edit or
  // move this call however you'd like.
  analytics.page();

})();

window.$buoop = {vs: {i: 9, f: 30, o: 25, s: 5.1}, c: 2};
function browserUpdate() {
  var e = document.createElement('script');
  e.src = '//browser-update.org/update.js';
  document.body.appendChild(e);
}
try {
  document.addEventListener('DOMContentLoaded', browserUpdate, false);
}
catch (e) {
  window.attachEvent('onload', browserUpdate);
}
