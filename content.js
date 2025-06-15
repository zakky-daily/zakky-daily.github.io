'use strict'

function MarqueeMessage() {
    const $message = $('.main .message');
    const $inner = $('.main .message .inner');
    $inner.css({'display': 'block', 'translate': $message.width() + 'px'});
    $inner.animate({'translate': -$inner.width() + 'px'}, 30000, 'linear', MarqueeMessage);
}

$(window).on('load', () => {
    MarqueeMessage();
});

