$(function () {
    'use strict';

    /* Scroll to */
    $(".js__scroll-to").click(function (e) {
        $("html,body").stop().animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
        e.preventDefault();
    });

    var slider = $('.js__slider');
    slider.removeClass('hide');

    slider.slick({
        fade: true,
        speed: 100,
        lazyLoad: 'ondemand'
    });

    $('.slider-nav').on('click', $('li'), function (e) {
        e.preventDefault();
        setTimeout(function () {
            slider.slick('setPosition', 0);
        }, 0);
    });

    $('.tab-content').on('click', $('.tab-pane.active .slider-thumbnails').children('a'), function (e) {
        var slide_id = '';
        if (e.target.tagName === 'A') {
            slide_id = $(e.target).parent().data('toggle');
        }
        else if (e.target.tagName === 'IMG') {
            slide_id = $(e.target).parent().parent().data('toggle');
        }

        if (slide_id) {
            var id = +slide_id.replace('slide_', '');
            slider.slick('slickGoTo', id);
        }
    });

    $('#bk_iframe_cont').on('click', $('.btn-orderBK'), function (e) {
        var target = 'click';
        if (e.target.outerText === 'Оформить заявку') {
            yaCounter45309495.reachGoal(
                target,
                console.info('Запрос со значением ' + target + ' успешно отправлен в метрику 45309495'));
        }
        return false;
    });
});