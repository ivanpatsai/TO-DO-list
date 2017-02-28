$('ul').on('click', 'li', function () {
    $(this).toggleClass('done');
});

$('ul').on('click', 'span', function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$('input').on('keypress', function (e) {
    if (e.which === 13) {
        $('ul').append('<li><span><i class="fa fa-times" aria-hidden="true"></i></span> '+ $(this).val() + '</li>');
        $(this).val('');
    }
});

$('.fa-pencil-square-o').click(function () {
        $('input').fadeIn().focus();
});