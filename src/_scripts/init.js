(function() {
  'use strict';
  var currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.innerHTML = new Date().getFullYear();
  }
  InstantClick.on('change', function() {
    jQuery(document).foundation();
    initSmoothScroll();
    initDropdowns();
    window.analytics.page();
    if (typeof window.bootstrapRatesApp === 'function') {
      window.bootstrapRatesApp();
    }
  });
  InstantClick.init();

  function initSmoothScroll() {
    //smooth scrolling on clicks
    jQuery('a[href*=#]').on('click', function(e) {
      if (this.href.indexOf('#') === 0) {
        e.preventDefault();
      }
      //don't scroll on accordion toggle
      if (this.parentNode.className.split('accordion-navigation').length < 2) {
        jQuery('body').animate({
          scrollTop: parseInt(jQuery(
            '' + this.href.substring(this.href.indexOf('#'))
          ).offset().top)
        }, 500);
      }
    });

    //smooth scrolling on pageloads
    jQuery(function() {
      if (window.location.hash) {
        jQuery('body').animate({
          scrollTop: parseInt(jQuery(
            '' + window.location.href.substring(
              window.location.href.indexOf('#')
            )
          ).offset().top)
        }, 500);
      }
    });
  }

  function initDropdowns() {
    var integrationSelector = jQuery('#integrationDrop');
    if (integrationSelector.length) {
      integrationSelector.on('change', function() {
        window.location.href = this.value;
      });
    }

    var settlementSelector = jQuery('#settlementDrop');
    if (settlementSelector.length) {
      settlementSelector.on('change', function() {
        jQuery('.settlementDetails').hide();
        var currencies = this.value.split(',');
        jQuery.each(currencies, function(index, val) {
          jQuery('#' + val).show();
        });
      });
    }
  }

}());
