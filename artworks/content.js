function ChangeHeight() {

    $('.items .item').each(function(_, element) {
        
        const $detail = $(element).children('.detail');

        if ($(element).hasClass('item-active')) {

            $detail.css({height: 'fit-content'});
            const height = $detail.outerHeight();
            $detail.css({height: '0px'});
            requestAnimationFrame(() => $detail.css({height: height + 'px'}));
            
        } else {
            $detail.css({height: '0px'});
        }
    });
}

function ChangeActive(target) {

    $('.items .item').each(function(_, element) {

        const $header = $(element).children('.header');

        if (!$(element).hasClass('item-active') && $header[0] === target) {
            $(element).addClass('item-active');
        } else {
            $(element).removeClass('item-active');
        }
    });
    ChangeHeight();
}

$(window).resize(function() {

    ChangeHeight();
});
