!function () {
  var analytics = window.analytics = window.analytics || [];
  if (!analytics.initialize)if (analytics.invoked)window.console && console.error && console.error("Segment snippet included twice."); else {
    analytics.invoked = !0;
    analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "group", "track", "ready", "alias", "page", "once", "off", "on"];
    analytics.factory = function (t) {
      return function () {
        var e = Array.prototype.slice.call(arguments);
        e.unshift(t);
        analytics.push(e);
        return analytics
      }
    };
    for (var t = 0; t < analytics.methods.length; t++) {
      var e = analytics.methods[t];
      analytics[e] = analytics.factory(e)
    }
    analytics.load = function (t) {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = !0;
      e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(e, n)
    };
    analytics.SNIPPET_VERSION = "3.0.1";
    if (this.location.host === 'bitpay.com') {
      analytics.load('wnr2h1ly5s');
    } else if (this.location.host === 'test.bitpay.com') {
      analytics.load("qsi42b1dn7");
    } else if (this.location.host.split(':')[0] === 'localhost' || this.location.host.split(':')[1] === '8088') {
      analytics.load("q50cjcd7tx");
    } else if (this.location.host.split(':')[0] === 'file') {
      analytics.load("aggkeymxlk");
    } else {
      analytics.load("xT31BDiOQK9CN6PICpxAhFqHacoLc2VP");
    }
  }
}();

window.$buoop = {vs: {i: 9, f: 30, o: 25, s: 5.1}, c: 2};
function $buo_f() {
  var e = document.createElement("script");
  e.src = "//browser-update.org/update.js";
  document.body.appendChild(e);
}
try {
  document.addEventListener("DOMContentLoaded", $buo_f, false)
}
catch (e) {
  window.attachEvent("onload", $buo_f)
}
