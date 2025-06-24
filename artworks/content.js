function ExpandItem(target) {

    $('.items .item').each(function(_, element) {

        const $header = $(element).children('.header');
        const $detail = $(element).children('.detail');

        if (!$(element).hasClass('item-active') && $header[0] === target) {

            $(element).addClass('item-active');
            $detail.css({'height': $detail[0].scrollHeight + 'px'});

        } else {

            $(element).removeClass('item-active');
            $detail.css({'height': 0});
        }
    });
}