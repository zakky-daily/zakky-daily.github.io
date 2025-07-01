'use strict'

function ChangeActiveTab(target) {

    let currTabIndex = parseInt($.cookie('active-tab-index'));

    if (currTabIndex == $(target).parent().index())
        currTabIndex = -1;
    else
        currTabIndex = $(target).parent().index();

    $.cookie('active-tab-index', currTabIndex);
    UpdateTab();
}


function UpdateTab() {

    let currTabIndex = $.cookie('active-tab-index');
    if (currTabIndex === undefined) currTabIndex = -1;

    $('.items .item').each(function(i, element) {

        const $detail = $(element).children('.detail');

        if (i == currTabIndex) {

            $(element).addClass('item-active');
            $(element).removeClass('item-noactive');

            $detail.css({height: 'fit-content'});
            const height = $detail.outerHeight();
            $detail.css({height: '0px'});
            requestAnimationFrame(() => $detail.css({height: height + 'px'}));
        
        } else {

            $(element).removeClass('item-active');
            if (currTabIndex == -1)
                $(element).removeClass('item-noactive');
            else
                $(element).addClass('item-noactive');

            $detail.css({height: '0px'});
        }
    });
}


$(window).resize(function() {
    
    UpdateTab();
});

$(window).on('scroll', () => {

    $.cookie('scroll-pos', $(window).scrollTop());
})

$(window).on('load', () => {

    UpdateTab();
})
