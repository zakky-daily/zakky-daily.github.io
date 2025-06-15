'use strict'

function MarqueeMessage() {
    const $message = $('.main .message');
    const $inner = $('.main .message .inner');
    $inner.css({'display': 'block', 'translate': $message.width() + 'px'});
    $inner.animate({'translate': -$inner.width() + 'px'}, 30000, 'linear', MarqueeMessage);
}

function InitTopics() {
    const $topic = $('.main .topics .mask .fixed .topic');
    $('.main .topics .mask .range').width($topic.length * 100 + '%');
    for (let i = 0; i < $topic.length; i++) {
        $topic.eq(i).css({'z-index': $topic.length - i});
    }
    UpdateTopics();
}

function UpdateTopics() {
    const $topics = $('.main .topics .mask');
    const unit = $topics.width();
    const $topic = $('.main .topics .mask .fixed .topic');
    for (let i = 0; i < $topic.length; i++) {
        $topic.eq(i).find('.frame').css({'width': unit + 'px'});
        let width = Math.min(unit, unit * (i + 1) - $topics.scrollLeft());
        $topic.eq(i).css({'width': width + 'px'});
    }
}

$(window).on('load', () => {
    MarqueeMessage();

    InitTopics();
    $('.main .topics .mask').scroll(UpdateTopics);
    $(window).resize(UpdateTopics);
});

