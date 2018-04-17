/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.box-slider').slick({
      dots: true,
      arrows: false
    })

    $('.modal-announce').modal('show')
  })
})(jQuery)
