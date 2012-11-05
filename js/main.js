$(function () {
    $("#title").fitText();

    var $container = $('.isotope');
    $container.isotope({
        itemSelector: '.isotope-item'
    });

    // filter items when filter link is clicked
    $('#isotope-filters a').click(function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
});
