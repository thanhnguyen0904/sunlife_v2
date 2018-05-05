/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.box-um .title').on('click', function () {
      $(this).parent().find('.detail').toggleClass('show')
    })
    $('.group-cont-border-left .gcbl-title').on('click', function(e) {
      e.preventDefault();
      ($(this).parents('.group-cont-border-left').siblings('.group-cont-border-left').find('.gcbl-title ul').hasClass('show')) ? $(this).parents('.group-cont-border-left').siblings('.group-cont-border-left').find('.gcbl-title ul').removeClass('show') : '';
      $(this).find('ul.dropdown-menu').toggleClass('show')
    })

    $('.tab-pane .kq-thongke-dropdown').on('click', function(e) {
      console.log('123213');
      e.preventDefault();
      ($(this).parents('.tab-pane').siblings('.tab-pane').find('.kq-thongke-dropdown ul').hasClass('show')) ? $(this).parents('.tab-pane').siblings('.tab-pane').find('.kq-thongke-dropdown ul').removeClass('show') : '';
      $(this).find('ul.dropdown-menu').toggleClass('show')
    })

    $('.percent').circleProgress({
      startAngle: 4.7,
      value: .75,
      size: 55,
      fill: {
        gradient: ['#003946','#f5a623']
      }
    });

    $('.modal').modal('show')

  })
})(jQuery)
