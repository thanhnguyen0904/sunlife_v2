/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.box-um .title').on('click', function () {
      $(this).parent().find('.detail').toggleClass('show')
    })
    $('.group-cont-border-left .gcbl-title').on('click', function(e) {
      e.preventDefault();
      ($(this).parents('.box-um').find('.gcbl-title ul').hasClass('show')) ? $(this).parents('.box-um').find('.gcbl-title ul').removeClass('show') : '';
      $(this).find('.dropdown-menu').toggleClass('show')
    })

    $('.tab-pane .btn.btn-info').on('click', function() {
      $('.modal').modal('show')
    })



  })
})(jQuery)
