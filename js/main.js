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

    var contatoForm = $('#contato-form');
    contatoForm.on('submit', function (e) {
        $.post('https://zapier.com/hooks/catch/n/2PAB/',
        {
            subject: contatoForm.find('[name=subject]').val(),
            body: contatoForm.find('[name=body]').val()
        })
        .complete( function (data) {
            alert('Obrigado!');
        });

        e.preventDefault();
        return false;
    });

    analytics.initialize({
    'Google Analytics' : 'UA-35941179-1'
    });
});
