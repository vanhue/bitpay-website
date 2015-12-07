(function () {
  'use strict';

  var referralScope = {};

  function initializeReferralData() {
    referralScope.ids = {
      urlAid: null,
      cookieAid: null,
      flashAid: null
    };

    if (!referralScope.swfStore) {
      referralScope.swfStore = new window.SwfStore({
        namespace: 'bitpay',
        swf_url: 'https://bitpay.com/downloads/storage.swf',
        onerror: function () {
          console.log('FLASH Failed to load.');
        },
        onready: function () {
          referralScope.flashReady = true;
          if (referralScope.ids.urlAid) {
            setFlashCookie(referralScope.ids.urlAid);
          }
          else if (referralScope.ids.cookieAid) {
            setFlashCookie(referralScope.ids.cookieAid);
          }
          referralScope.ids.flashAid = referralScope.swfStore.get('affiliateId');
        }
      });
    }

    referralScope.setUrlAid = function (oid) {
      if (!referralScope.ids.urlAid) {
        referralScope.ids.urlAid = oid;

        setJsCookie(oid);
        setFlashCookie(oid);

      }
    };

    referralScope.ids.cookieAid = readJSCookie('bp-referral-code');

  }

  initializeReferralData();

  function setFlashCookie(id) {
    if (referralScope.flashReady && !referralScope.swfStore.get('affiliateId')) {
      referralScope.swfStore.set('affiliateId', id);
    }
  }

  function setJsCookie(id) {
    if (!readJSCookie('bp-referral-code')) {
      referralScope.ids.cookieAid = id;
      createCookie('bp-referral-code', id, 9999);
    }
  }

  function readJSCookie(name) {
    name += '=';
    for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--) {
      if (!ca[i].indexOf(name)) {
        return ca[i].replace(name, '');
      }
    }
  }

  function createCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  }

  var oid = getUrlParameter('oid');
  referralScope.setUrlAid(oid);

}());
