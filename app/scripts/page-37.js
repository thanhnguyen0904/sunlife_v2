/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.s-question').on('click', function(e) {
      console.log('13123');
      e.preventDefault();
      $(this).find('ul.dropdown-menu').toggleClass('show')
    })
  })
})(jQuery)
